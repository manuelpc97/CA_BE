var express = require('express');
var router = express.Router();
var formController = require('../controllers/form');

router.get('/get/:id', formController.getFormById);
router.post('/saveFilled', formController.saveFilledForm);
router.get('/get/userForms/:userId', formController.getProductFilledForms);

module.exports = router;