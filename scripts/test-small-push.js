const { Client } = require("ssh2");
const fs = require("fs");
const { execSync, spawnSync } = require("child_process");

const privateKey = fs.readFileSync("/home/z/.ssh/id_ed25519", "utf8");
const commitHash = execSync("git rev-parse main", { encoding: "utf8", cwd: "/tmp/drjenkin-test" }).trim();
console.error(`[small] commit = ${commitHash}`);

const refUpdate = `0000000000000000000000000000000000000000 ${commitHash} refs/heads/test-small\0 report-status-v2 side-band-64k quiet agent=manual-push/1.0\n`;
const refUpdatePkt = `${refUpdate.length.toString(16).padStart(4, "0")}${refUpdate}`;
const flushPkt = "0000";

const packResult = spawnSync("git", ["pack-objects", "--all-progress-implied", "--revs", "--stdout", "--delta-base-offset", "-q"], {
  encoding: "buffer",
  input: Buffer.from(`${commitHash}\n`, "utf8"),
  cwd: "/tmp/drjenkin-test",
});
const packfile = packResult.stdout;
console.error(`[small] packfile = ${packfile.length} bytes`);

const conn = new Client();
conn.on("ready", () => {
  console.error(`[small] connected`);
  conn.exec("git-receive-pack '/JacobSeatlholo/drjenkin.git'", (err, stream) => {
    if (err) { console.error(err.message); process.exit(1); }
    let phase = "adv";
    let resp = Buffer.alloc(0);
    stream.stdout.on("data", (chunk) => {
      if (phase === "adv") {
        const s = chunk.toString("utf8");
        if (s.includes("0000", 4)) {
          phase = "resp";
          stream.stdin.write(Buffer.from(refUpdatePkt + flushPkt, "utf8"));
          stream.stdin.write(packfile);
          stream.stdin.end();
        }
      } else {
        resp = Buffer.concat([resp, chunk]);
        console.error(`[small] resp chunk: ${chunk.toString("utf8").slice(0, 200)}`);
      }
    });
    stream.stderr.on("data", (c) => console.error(`[small] STDERR: ${c.toString()}`));
    stream.on("close", () => {
      console.error(`[small] done. final: ${resp.toString("utf8")}`);
      conn.end();
    });
  });
});
conn.on("error", (e) => console.error(`[small] error: ${e.message}`));
conn.connect({ host: "github.com", port: 22, username: "git", privateKey, readyTimeout: 30000 });
