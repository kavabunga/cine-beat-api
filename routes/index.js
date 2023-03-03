const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const { signUp, signIn, signOut } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { validateCredentials, validateNewUser } = require('../middlewares/requestValidator');
const wrongRouteHandler = require('../middlewares/wrongRouteHandler');

// Auth routes:
router.post('/signup', validateNewUser, signUp);
router.post('/signin', validateCredentials, signIn);

// Protection middleware:
router.use(auth);

// General routers
router.post('/signout', signOut);
router.use('/users', userRouter);
router.use('/movies', movieRouter);

// Wrongroute middleware
router.use('*', wrongRouteHandler);

module.exports = router;
