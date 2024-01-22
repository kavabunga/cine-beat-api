const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const { isEmail } = require('validator');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { responseMessages } = require('../util/constants.ts');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: isEmail,
      message: responseMessages.errorSchemaValidatorEmail,
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(
          new UnauthorizedError(
            responseMessages.errorUnauthorizedBadCredentials,
          ),
        );
      }
      return bycrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(
            new UnauthorizedError(
              responseMessages.errorUnauthorizedBadCredentials,
            ),
          );
        }
        return user;
      });
    });
};

module.exports = mongoose.model('user', userSchema);
