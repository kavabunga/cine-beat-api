const router = require('express').Router();
const { validateMovie, validateId } = require('../middlewares/requestValidation');

const { getMovies, postMovie, deleteMovieById } = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', validateMovie, postMovie);
router.delete('/:id', validateId, deleteMovieById);

module.exports = router;
