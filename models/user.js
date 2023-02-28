const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const { isEmail } = require('validator');

const userSchema = new mongoose.Scema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: isEmail,
      message: 'Передан некорректный email пользователя',
    },
    uniqe: true,
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
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Неправильные почта или пароль'));
      }
      return bycrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('Неправильные почта или пароль'));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
