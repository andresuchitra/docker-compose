var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user.js')

// get all users
router.get('/', UserController.findAll);

// add user
router.post('/', UserController.create);

//delete user
router.delete('/:id', UserController.delete);

//update user
router.put('/:id', UserController.update)
router.patch('/:id', UserController.update)


module.exports = router;
