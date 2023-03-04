const router = require('express').Router();
const { validateNewMovie, validateId } = require('../middlewares/requestValidator');

const { getMovies, postMovie, deleteMovieById } = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', validateNewMovie, postMovie);
router.delete('/:id', validateId, deleteMovieById);

module.exports = router;
