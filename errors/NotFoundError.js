const HttpError = require('./HttpError');
const { errorCodes } = require('../util/constants.ts');

module.exports = class NotFoundError extends HttpError {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = errorCodes.NOT_FOUND;
  }
};
