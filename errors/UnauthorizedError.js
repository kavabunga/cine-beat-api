const HttpError = require('./HttpError');
const { errors } = require('../util/constants.ts');

module.exports = class UnauthorizedError extends HttpError {
  constructor(message) {
    super(message);
    this.name = errors.UNAUTHORIZED.name;
    this.statusCode = errors.UNAUTHORIZED.code;
  }
};
