const router = require('express').Router();
const { validateUserInfo } = require('../middlewares/requestValidator');

const { getUser, updateUser } = require('../controllers/users');

router.get('/me', getUser);
router.patch('/me', validateUserInfo, updateUser);

module.exports = router;
