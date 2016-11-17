var express = require('express');
var router = express.Router();
const dataController = require('../controllers/controllers.api.data')

router.get('/seed', dataController.seedData)

module.exports = router;