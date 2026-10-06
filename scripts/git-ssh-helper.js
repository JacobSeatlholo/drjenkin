// SSH transport helper for git, using the ssh2 Node library.
//
// Git invokes us via the ext:: transport with the git service name
// as argv[2] (e.g., 'git-receive-pack' for push).
//
// We connect to github.com:22 as user 'git', exec the service on the
// repo path, and pipe stdin/stdout/stderr bidirectionally.

const { Client } = require("ssh2");
const fs = require("fs");
const path = require("path");

const host = "github.com";
const repoPath = "JacobSeatlholo/drjenkin.git";
const service = process.argv[2] || "git-receive-pack";

const keyPath = path.join(process.env.HOME, ".ssh", "id_ed25519");
const privateKey = fs.readFileSync(keyPath, "utf8");

const conn = new Client();
let exitCode = 0;
let streamRef = null;

conn.on("ready", () => {
  // GitHub expects: git-receive-pack '/owner/repo.git' (leading slash, single quotes)
  const cmd = `${service} '/${repoPath.replace(/^\/+/, "")}'`;

  conn.exec(cmd, { pty: false }, (err, stream) => {
    if (err) {
      console.error(`ssh-helper: exec error: ${err.message}`);
      conn.end();
      process.exit(1);
    }
    streamRef = stream;

    // Don't auto-close stdin on the SSH stream — git will signal end-of-input
    // via the protocol itself (flush-pkt). We only close when the channel closes.
    stream.stdin.on("error", (e) => {
      if (process.env.SSH_HELPER_DEBUG) console.error(`[helper] stdin error: ${e.message}`);
    });
    stream.stdout.on("error", (e) => {
      if (process.env.SSH_HELPER_DEBUG) console.error(`[helper] stdout error: ${e.message}`);
    });
    stream.stderr.on("error", (e) => {
      if (process.env.SSH_HELPER_DEBUG) console.error(`[helper] stderr error: ${e.message}`);
    });

    stream.on("eof", () => {
      if (process.env.SSH_HELPER_DEBUG) console.error(`[helper] stream eof`);
    });

    // Sideband-64k demuxer: when GitHub's receive-pack uses sideband,
    // every packet from the remote is wrapped as:
    //   <4-byte hex len><1-byte channel><payload...>
    // channel 1 = data (write to stdout, raw)
    // channel 2 = progress (write to stderr)
    // channel 3 = fatal error (write to stderr)
    //
    // We need to demultiplex these so git sees clean data on stdout.
    // But here's the catch: when git speaks to the helper, IT ALSO sends
    // sideband-wrapped data and expects the remote to demux. We can't
    // intercept that without speaking the full protocol.
    //
    // The pragmatic fix: pass data through unchanged. GitHub's send-pack
    // sideband is "remote → client only" — when our local git sends
    // commands + packfile, it's plain git protocol (no sideband). The
    // remote response is sideband-wrapped, and git will demux that
    // itself. So we just need to forward bytes verbatim.

    // Explicit data forwarding with strict backpressure handling.
    let stdinPaused = false;
    let pendingWrites = 0;

    const onData = (chunk) => {
      if (process.env.SSH_HELPER_DEBUG) console.error(`[helper] stdin data ${chunk.length} bytes (pending=${pendingWrites})`);
      pendingWrites++;
      const ok = stream.stdin.write(chunk, () => {
        pendingWrites--;
        if (process.env.SSH_HELPER_DEBUG) console.error(`[helper] ssh write callback (pending=${pendingWrites})`);
      });
      if (!ok && !stdinPaused) {
        if (process.env.SSH_HELPER_DEBUG) console.error(`[helper] backpressure — pausing stdin`);
        stdinPaused = true;
        process.stdin.pause();
        stream.stdin.once("drain", () => {
          if (process.env.SSH_HELPER_DEBUG) console.error(`[helper] drain — resuming stdin`);
          stdinPaused = false;
          process.stdin.resume();
        });
      }
    };
    process.stdin.on("data", onData);
    process.stdin.on("end", () => {
      if (process.env.SSH_HELPER_DEBUG) console.error(`[helper] process.stdin end — closing SSH stdin`);
      stream.stdin.end();
    });
    process.stdin.on("error", (e) => {
      if (process.env.SSH_HELPER_DEBUG) console.error(`[helper] process.stdin error: ${e.message}`);
      try { stream.stdin.end(); } catch (e2) {}
    });
    process.stdin.on("close", () => {
      if (process.env.SSH_HELPER_DEBUG) console.error(`[helper] process.stdin close`);
    });

    // Resume reading — process.stdin starts paused by default in some Node versions
    process.stdin.resume();

    // Forward remote output to our stdout/stderr
    stream.stdout.on("data", (chunk) => {
      if (process.env.SSH_HELPER_DEBUG) {
        const hex = chunk.toString("hex").slice(0, 80);
        const txt = chunk.toString("utf8").replace(/[\x00-\x1f]/g, ".").slice(0, 80);
        console.error(`[helper] stdout data ${chunk.length} bytes hex=${hex} txt=${txt}`);
      }
      process.stdout.write(chunk);
    });
    stream.stderr.on("data", (chunk) => {
      if (process.env.SSH_HELPER_DEBUG) console.error(`[helper] stderr data: ${chunk.toString().trim()}`);
      process.stderr.write(chunk);
    });

    // When the remote channel closes, give buffered stdout data time to
    // flush to git BEFORE we tear down the SSH connection.
    stream.on("exit", (code) => {
      if (process.env.SSH_HELPER_DEBUG) console.error(`[helper] stream exit code=${code}`);
      exitCode = code || 0;
    });
    stream.on("close", (code) => {
      if (process.env.SSH_HELPER_DEBUG) console.error(`[helper] stream close code=${code}`);
      exitCode = code ?? exitCode;
      // Wait for stdout to flush, then end the connection
      process.stdout.write("", "utf8", () => {
        setTimeout(() => conn.end(), 500);
      });
    });
  });
});

conn.on("error", (err) => {
  // Suppress noisy stderr if the connection dropped after a successful push
  // (git sometimes still expects more data even after the work is done).
  if (!String(err.message || "").includes("Keepalive timeout")) {
    console.error(`ssh-helper: connection error: ${err.message}`);
  }
});

conn.on("close", () => {
  process.exit(exitCode);
});

conn.connect({
  host: host,
  port: 22,
  username: "git",
  privateKey: privateKey,
  readyTimeout: 30000,
  keepaliveInterval: 5000,
  keepaliveCountMax: 3,
});
