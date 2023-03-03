const router = require('express').Router();
const { validateUpdateUser } = require('../middlewares/requestValidator');

const { getUser, updateUser } = require('../controllers/users');

router.get('/me', getUser);
router.patch('/me', validateUpdateUser, updateUser);

module.exports = router;
