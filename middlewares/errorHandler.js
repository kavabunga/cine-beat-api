const { isCelebrateError } = require('celebrate');
const mongoose = require('mongoose');
const HttpError = require('../errors/HttpError');
const { errors, responseMessages } = require('../util/constants.ts');

module.exports = (err, req, res, next) => {
  if (err.code === 11000) {
    return res
      .status(errors.CONFLICT.code)
      .send({ message: responseMessages.errorUserExists });
  }
  if (isCelebrateError(err)) {
    return res
      .status(errors.BAD_REQUEST.code)
      .send({ message: responseMessages.errorJoiValidation });
  }
  if (err instanceof HttpError) {
    return res.status(err.statusCode).send({ message: err.message });
  }
  if (err instanceof mongoose.Error.ValidationError) {
    return res
      .status(errors.BAD_REQUEST.code)
      .send({ message: responseMessages.errorMongooseValidation });
  }
  if (err instanceof mongoose.Error.CastError) {
    return res
      .status(errors.BAD_REQUEST.code)
      .send({ message: responseMessages.errorMongooseCast });
  }
  res
    .status(errors.DEFAULT.code)
    .send({ message: responseMessages.errorDefault });
  return next();
};
