// Manual git push over SSH — speaks the raw git protocol.
// This bypasses git's transport entirely so we can see EXACTLY what
// GitHub says in response to our push.

const { Client } = require("ssh2");
const fs = require("fs");
const { execSync } = require("child_process");
const { spawnSync } = require("child_process");

const privateKey = fs.readFileSync("/home/z/.ssh/id_ed25519", "utf8");

// Get the local commit hash and packfile
const commitHash = execSync("git rev-parse main", { encoding: "utf8" }).trim();
console.error(`[push] local main = ${commitHash}`);

// Build the ref-update command: <old> <new> <ref>\n
const refUpdate = `0000000000000000000000000000000000000000 ${commitHash} refs/heads/main\0 report-status-v2 side-band-64k quiet agent=manual-push/1.0\n`;
const refUpdatePkt = `${refUpdate.length.toString(16).padStart(4, "0")}${refUpdate}`;
const flushPkt = "0000";

console.error(`[push] ref-update pkt: ${refUpdatePkt.length} bytes`);
// Generate the packfile using spawnSync with buffer input/output
// The input to pack-objects --revs is a list of commits to include (one per line).
// To include all of `commitHash` and exclude nothing (new repo), just pass the hash.
console.error(`[push] generating packfile...`);
const packResult = spawnSync(
  "git",
  ["pack-objects", "--all-progress-implied", "--revs", "--stdout", "--delta-base-offset", "-q"],
  {
    encoding: "buffer",
    input: Buffer.from(`${commitHash}\n`, "utf8"),
  }
);
if (packResult.status !== 0) {
  console.error(`[push] pack-objects failed: ${packResult.stderr.toString()}`);
  process.exit(1);
}
const packfile = packResult.stdout;
console.error(`[push] packfile: ${packfile.length} bytes`);

const conn = new Client();

conn.on("ready", () => {
  console.error(`[push] connected, exec git-receive-pack`);
  conn.exec("git-receive-pack '/JacobSeatlholo/drjenkin.git'", (err, stream) => {
    if (err) {
      console.error(`[push] exec error: ${err.message}`);
      process.exit(1);
    }

    let receivedData = Buffer.alloc(0);
    let phase = "advertisement"; // advertisement → response

    stream.stdout.on("data", (chunk) => {
      receivedData = Buffer.concat([receivedData, chunk]);
      console.error(`[push] stdout ${chunk.length} bytes (total ${receivedData.length})`);

      if (phase === "advertisement") {
        // Parse the advertisement — it ends with "0000" flush-pkt
        const flushIdx = receivedData.toString("utf8").indexOf("0000", 4);
        if (flushIdx >= 0) {
          console.error(`[push] advertisement received (${flushIdx + 4} bytes)`);
          console.error(`[push] advertisement: ${receivedData.toString("utf8").slice(0, 200)}...`);
          phase = "sending-commands";

          // Send ref-update + flush + packfile
          const commands = Buffer.from(refUpdatePkt + flushPkt, "utf8");
          console.error(`[push] sending commands: ${commands.length} bytes`);
          stream.stdin.write(commands);

          console.error(`[push] sending packfile: ${packfile.length} bytes`);
          stream.stdin.write(packfile);

          console.error(`[push] closing stdin (EOF)`);
          stream.stdin.end();

          phase = "response";
          receivedData = Buffer.alloc(0); // reset for response
        }
      } else if (phase === "response") {
        console.error(`[push] RESPONSE chunk: ${chunk.toString("utf8").slice(0, 200)}`);
      }
    });

    stream.stderr.on("data", (chunk) => {
      console.error(`[push] REMOTE STDERR: ${chunk.toString("utf8")}`);
    });

    stream.on("exit", (code) => {
      console.error(`[push] remote exit code: ${code}`);
    });

    stream.on("close", () => {
      console.error(`[push] channel closed`);
      if (receivedData.length > 0) {
        console.error(`[push] final response data (${receivedData.length} bytes):`);
        console.error(`[push] hex: ${receivedData.toString("hex")}`);
        console.error(`[push] utf8: ${receivedData.toString("utf8").slice(0, 500)}`);
      } else {
        console.error(`[push] NO response data received`);
      }
      conn.end();
    });
  });
});

conn.on("error", (err) => {
  console.error(`[push] connection error: ${err.message}`);
});

conn.connect({
  host: "github.com",
  port: 22,
  username: "git",
  privateKey: privateKey,
  readyTimeout: 30000,
});
