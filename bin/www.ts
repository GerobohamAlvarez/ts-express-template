/**
 * Module dependencies.
 */

import ApplicationName from "../src/app";
import http from "http";

/**
 * Create Application Instance
 */

const app = new ApplicationName().getInstance();

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env["PORT"] || "3000");
app.set("port", port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

type ExpressError = { syscall: string; code: string } & Error

function onError(error: ExpressError) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      // eslint-disable-next-line no-console
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      // eslint-disable-next-line no-console
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {

  const addr = server.address();
  const bind = typeof addr === "string" ? `${addr}`  : `${addr?.address}:${addr?.port} `;
  // eslint-disable-next-line no-console
  console.debug("Listening on: " + bind);
}
