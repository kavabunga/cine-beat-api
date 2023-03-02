const Movie = require('../models/movie');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

module.exports.getMovies = async function (req, res, next) {
  try {
    const movies = await Movie.find({ owner: req.user._id })
      .populate('owner');
    if (!movies) {
      return next(new NotFoundError('Запрошенные фильмы не найдены'));
    }
    return res.send({ data: movies });
  } catch (err) {
    return next(err);
  }
};

module.exports.postMovie = async function (req, res, next) {
  try {
    const movie = await Movie.create({ ...req.body, owner: req.user._id });
    await movie.populate('owner');
    return res.status(201).send({ data: movie });
  } catch (err) {
    return next(err);
  }
};

module.exports.deleteMovieById = async function (req, res, next) {
  try {
    const movie = await Movie.findById(req.params.id).populate('owner');
    if (!movie) {
      return next(new NotFoundError(`Запрошенный фильм с _id: ${req.params.id} не найден`));
    }
    if (movie.owner._id.toString() !== req.user._id) {
      return next(new ForbiddenError('Нет прав на удаление этого фильма'));
    }
    await movie.deleteOne();
    return res.send({ data: movie });
  } catch (err) {
    return next(err);
  }
};
