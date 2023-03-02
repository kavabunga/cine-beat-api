const { celebrate, Joi } = require('celebrate');

module.exports.validateCredentials = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
  }),
});

module.exports.validateUserInfo = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

module.exports.validateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required().integer(),
    description: Joi.string().required(),
    image: Joi.string().required().uri(),
    trailerLink: Joi.string().required().uri(),
    nameRu: Joi.string().required(),
    nameEn: Joi.string().required(),
    thumbnail: Joi.string().required().uri(),
    movieId: Joi.string().required(),
  }),
});

module.exports.validateId = celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).required(),
  }),
});
