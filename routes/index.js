const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const { signUp, signIn, signOut } = require('../controllers/users');
const auth = require('../middlewares/auth');

// Auth routes:
router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/signout', signOut);

// Protection middleware:
router.use(auth);

// General routers
router.use('/users', userRouter);
router.use('/movies', movieRouter);

// Wrongroute middleware

module.exports = router;
