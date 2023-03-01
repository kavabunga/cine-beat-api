const Movie = require('../models/movie');

module.exports.getMovies = async function (req, res, next) {
  try {
    const movies = await Movie.find({ owner: req.user._id })
      .populate('owner');
    if (!movies) {
      return next('ERROR TO BE DESCRIBED — NOT FOUND');
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
      return next('ERROR TO BE DESCRIBED — NOT FOUND');
    }
    if (movie.owner._id.toString() !== req.user._id) {
      return next('ERROR TO BE DESCRIBED — NO ACCESS');
    }
    await movie.deleteOne();
    return res.send({ data: movie });
  } catch (err) {
    return next(err);
  }
};
