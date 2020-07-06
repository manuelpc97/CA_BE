var express = require('express');
var router = express.Router();
var emailController = require('../controllers/sendEmail');

router.post('/', emailController.sendEmail);

module.exports = router;