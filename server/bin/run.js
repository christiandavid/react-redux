const http = require("http");
const config = require("../config")[process.env.NODE_ENV || "development"];

const log = config.log();
const service = require("../server")(config);

const server = http.createServer(service);
server.listen(process.env.PORT);

server.on("listening", () => {
  process.on("uncaughtException", async () => {
    process.exit(0);
  });

  process.on("SIGINT", async () => {
    process.exit(0);
  });

  process.on("SIGTERM", async () => {
    process.exit(0);
  });

  log.info(
    `Listening on port ${server.address().port} in ${service.get("env")} mode.`
  );
});
