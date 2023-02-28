const jwt = require('jsonwebtoken');
const devSecret = require('../util/constants.ts');

const { JWT_SECRET = devSecret } = process.env;

module.exports = (req, res, next) => {
  if (!req.cookies.jwt) {
    return next('ERROR TO BE DESCRIBED — UNAUTHORISED');
  }
  let payload;
  try {
    payload = jwt.verify(req.cookies.jwt, JWT_SECRET);
  } catch (err) {
    return next('ERROR TO BE DESCRIBED — UNAUTHORISED');
  }
  req.user = payload;
  return next();
};
