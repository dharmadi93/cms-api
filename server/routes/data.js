var express = require('express');
var router = express.Router();
const dataController = require('../controllers/controllers.api.data')

router.get('/seed', dataController.seedData)
router.get('/', dataController.getAllData)
router.get('/id/:id', dataController.getDataById)
router.get('/letter/:letter', dataController.getDataByLetter)
router.post('/', dataController.createData)
router.delete('/', dataController.deleteAllData)

module.exports = router;