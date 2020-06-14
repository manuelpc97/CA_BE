var express = require('express');
var router = express.Router();
var formController = require('../controllers/form');

router.get('/get/:id', formController.getFormById);

module.exports = router;