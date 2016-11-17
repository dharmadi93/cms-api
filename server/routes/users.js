var express = require('express');
var router = express.Router();
const userController = require('../controllers/controllers.api.user')

router.post('/register', userController.registerUser)
router.post('/register', userController.loginUser)

module.exports = router;
