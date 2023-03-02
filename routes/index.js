const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const { signUp, signIn, signOut } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { validateCredentials } = require('../middlewares/requestValidator');

// Auth routes:
router.post('/signup', validateCredentials, signUp);
router.post('/signin', validateCredentials, signIn);
router.post('/signout', signOut);

// Protection middleware:
router.use(auth);

// General routers
router.use('/users', userRouter);
router.use('/movies', movieRouter);

// Wrongroute middleware

module.exports = router;
