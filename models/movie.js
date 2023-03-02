const mongoose = require('mongoose');
const { isURL } = require('validator');
const { responseMessages } = require('../util/constants.ts');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: isURL,
      message: responseMessages.errorSchemaValidatorUrl,
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: isURL,
      message: responseMessages.errorSchemaValidatorUrl,
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: isURL,
      message: responseMessages.errorSchemaValidatorUrl,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: String,
    required: true,
  },
  nameRu: {
    type: String,
    required: true,
  },
  nameEn: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
