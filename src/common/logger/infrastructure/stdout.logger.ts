import { ILogger } from "common/logger/domain/ILogger";

export class StandardOutputLogger implements ILogger {
  debug(message: string): void {
    // eslint-disable-next-line no-console
    console.debug(
      `${
        process.pid
      } [\x1b[33m DEBUG \x1b[0m] ${new Date().toISOString()} :: ${message}`
    );
  }

  error(message: string, trace?: string[]): void {
    // eslint-disable-next-line no-console
    console.error(
      `${
        process.pid
      } [\x1b[33m ERROR \x1b[0m] ${new Date().toISOString()} :: ${message}`,
      trace || ""
    );
  }

  info(message: string): void {
    // eslint-disable-next-line no-console
    console.info(
      `${
        process.pid
      } [\x1b[33m INFO \x1b[0m] ${new Date().toISOString()} :: ${message}`
    );
  }

  warn(message: string): void {
    // eslint-disable-next-line no-console
    console.warn(
      `${
        process.pid
      } [\x1b[33m WARN \x1b[0m] ${new Date().toISOString()} :: ${message}`
    );
  }
}
