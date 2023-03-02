const mongoose = require('mongoose');
const HttpError = require('../errors/HttpError');
const { errorCodes } = require('../util/constants.ts');

module.exports = (err, req, res, next) => {
  if (err.code === 11000) {
    return res.status(errorCodes.CONFLICT).send({ message: 'Пользователь с таким email уже существует' });
  }
  if (err instanceof HttpError) {
    return res.status(err.statusCode).send({ message: err.message });
  }
  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(errorCodes.BAD_REQUEST).send({ message: 'Переданы некорректные данные' });
  }
  if (err instanceof mongoose.Error.CastError) {
    return res.status(errorCodes.BAD_REQUEST).send({ message: 'Переданы некорректные данные' });
  }
  res.status(errorCodes.DEFAULT).send({ message: 'Ошибка по умолчанию' });
  return next();
};
