const NotFoundError = require('../errors/NotFoundError');
const { responseMessages } = require('../util/constants.ts');

module.exports = (req, res, next) => {
  const err = new NotFoundError(responseMessages.errorNotFoundRoute);
  next(err);
};
