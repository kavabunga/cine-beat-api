const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { devSecret, devDomain } = require('../util/constants.ts');

const { NODE_ENV, DOMAIN = 'localhost', JWT_SECRET } = process.env;

module.exports.signUp = async function (req, res, next) {
  try {
    const hash = await bycrypt.hash(req.body.password, 10);
    req.body.password = hash;
    const user = await User.create(req.body);
    const { email, name, _id } = user;
    return res.status(201).send({ data: { email, name, _id } });
  } catch (err) {
    return next(err);
  }
};

module.exports.signIn = async function (req, res, next) {
  try {
    const {
      email, name, _id,
    } = await User.findUserByCredentials(req.body.email, req.body.password);
    const token = jwt.sign({ _id }, NODE_ENV === 'production' ? JWT_SECRET : devSecret, { expiresIn: '7d' });
    return res
      .cookie('jwt', token, {
        domain: NODE_ENV === 'production' ? DOMAIN : devDomain,
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      })
      .send({ data: { email, name, _id } });
  } catch (err) {
    return next(err);
  }
};

module.exports.signOut = async function (req, res, next) {
  try {
    return res
      .clearCookie('jwt', {
        domain: DOMAIN,
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        path: '/',
      })
      .send('Выход выполнен');
  } catch (err) {
    return next(err);
  }
};

module.exports.getUser = async function (req, res, next) {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return next('ERROR TO BE DESCRIBED — NOT FOUND');
    }
    return res.send({ data: user });
  } catch (err) {
    return next(err);
  }
};

module.exports.updateUser = async function (req, res, next) {
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!user) {
      return next('ERROR TO BE DESCRIBED — NOT FOUND');
    }
    return res.send({ data: user });
  } catch (err) {
    return next(err);
  }
};
