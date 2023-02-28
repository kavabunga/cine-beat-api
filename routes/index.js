const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const { signUp, signIn, signOut } = require('../controllers/users');

// Auth routes:
router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/signout', signOut);

// Protection middleware:

// General routers
router.use('/users', userRouter);
router.use('/movies', movieRouter);

// Wrongroute middleware

module.exports = router;
