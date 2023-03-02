const HttpError = require('./HttpError');
const { errors } = require('../util/constants.ts');

module.exports = class ForbiddenError extends HttpError {
  constructor(message) {
    super(message);
    this.name = errors.FORBIDDEN.name;
    this.statusCode = errors.FORBIDDEN.code;
  }
};
