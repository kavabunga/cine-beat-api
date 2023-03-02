const jwt = require('jsonwebtoken');
const { devSecret } = require('../util/constants.ts');
const UnauthorizedError = require('../errors/UnauthorizedError');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  if (!req.cookies.jwt) {
    return next(new UnauthorizedError('Не передан токен авторизации'));
  }
  let payload;
  try {
    payload = jwt.verify(req.cookies.jwt, NODE_ENV === 'production' ? JWT_SECRET : devSecret);
  } catch (err) {
    return next(new UnauthorizedError('Передан неправильный токен авторизации'));
  }
  req.user = payload;
  return next();
};
