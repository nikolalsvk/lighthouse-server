"use strict";

const { createServer } = require("@lhci/server");

console.log("Starting server...");
createServer({
  port: process.env.PORT,
  storage: {
    storageMethod: "sql",
    sqlDialect: "postgres",
    sqlConnectionSsl: true,
    sqlConnectionUrl: process.env.DATABASE_URL,
  },
  /* If you need basic auth uncomment this section
  basicAuth: {
    username: process.env.BASIC_AUTH_USERNAME,
    password: process.env.BASIC_AUTH_PASSWORD,
  },
  */
}).then(({ port }) => console.log("Listening on port", port));
