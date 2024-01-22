const winston = require('winston');
const expressWinston = require('express-winston');
const { loggerOptions } = require('../util/config.ts');

const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: loggerOptions.requestLogFilename }),
  ],
  format: winston.format.json(),
});

const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({ filename: loggerOptions.errorLogFilename }),
  ],
  format: winston.format.json(),
});

module.exports = {
  requestLogger,
  errorLogger,
};
