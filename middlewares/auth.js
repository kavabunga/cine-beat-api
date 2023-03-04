const jwt = require('jsonwebtoken');
const { devSecret } = require('../util/config.ts');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { responseMessages } = require('../util/constants.ts');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  if (!req.cookies.jwt) {
    return next(new UnauthorizedError(responseMessages.errorUnauthorizedNoToken));
  }
  let payload;
  try {
    payload = jwt.verify(req.cookies.jwt, NODE_ENV === 'production' ? JWT_SECRET : devSecret);
  } catch (err) {
    return next(new UnauthorizedError(responseMessages.errorUnauthorizedBadToken));
  }
  req.user = payload;
  return next();
};
