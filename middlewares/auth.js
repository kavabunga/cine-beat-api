const jwt = require('jsonwebtoken');
const devSecret = require('../util/constants.ts');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  if (!req.cookies.jwt) {
    return next('ERROR TO BE DESCRIBED — UNAUTHORISED');
  }
  let payload;
  try {
    payload = jwt.verify(req.cookies.jwt, NODE_ENV === 'production' ? JWT_SECRET : devSecret);
  } catch (err) {
    return next('ERROR TO BE DESCRIBED — UNAUTHORISED');
  }
  req.user = payload;
  return next();
};
