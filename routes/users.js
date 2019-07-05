const router = require('express').Router();
const User = require('../controllers/users')

router.get('/', User.getUsers);
router.get('/:id', User.getUsersById);
router.post('/', User.postUsers);
router.put('/:id', User.putUsers);
router.delete('/:id', User.deleteUsers);

module.exports = router;