const router = require('express').Router();

const { getMovies, postMovie, deleteMovieById } = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', postMovie);
router.delete('/:id', deleteMovieById);

module.exports = router;
