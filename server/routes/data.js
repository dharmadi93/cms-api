var express = require('express');
var router = express.Router();
const dataController = require('../controllers/controllers.api.data')

router.get('/seed', dataController.seedData)
router.delete('/', dataController.deleteAllData)

module.exports = router;