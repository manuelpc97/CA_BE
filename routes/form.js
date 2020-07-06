var express = require('express');
var router = express.Router();
var formController = require('../controllers/form');

router.get('/get/:id', formController.getFormById);
router.post('/saveFilled', formController.saveFilledForm);

module.exports = router;