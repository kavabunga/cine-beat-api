const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const { isEmail } = require('validator');
const UnauthorizedError = require('../errors/UnauthorizedError');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: isEmail,
      message: 'Передан некорректный email пользователя',
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
    default: 'Квентин Т.',
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedError('Переданы неправильные почта и/или пароль'));
      }
      return bycrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnauthorizedError('Переданы неправильные почта и/или пароль'));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
