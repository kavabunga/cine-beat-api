const HttpError = require('./HttpError');
const { errors } = require('../util/constants.ts');

module.exports = class NotFoundError extends HttpError {
  constructor(message) {
    super(message);
    this.name = errors.NOT_FOUND.name;
    this.statusCode = errors.NOT_FOUND.code;
  }
};
