var express = require('express');
var router = express.Router();
var businessController = require('../controllers/business');

router.post('/create', businessController.createBusiness);

module.exports = router;