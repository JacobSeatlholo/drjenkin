const { Client } = require("ssh2");
const fs = require("fs");
const conn = new Client();
conn.on("ready", () => {
  console.error("AUTH_SUCCESS");
  conn.end();
});
conn.on("error", (e) => {
  console.error("AUTH_ERROR:", e.message);
});
conn.connect({
  host: "github.com",
  port: 22,
  username: "git",
  privateKey: fs.readFileSync("/home/z/.ssh/id_ed25519", "utf8"),
  readyTimeout: 15000,
});
