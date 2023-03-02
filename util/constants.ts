const constants = {
  devSecret: 'krabsburger',
  devMongoURL: 'mongodb://localhost:27017/bitfilmsdb',
  devDomain: '.localhost',
  errorCodes: {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    DEFAULT: 500,
  },
}

module.exports = constants;