var express = require('express');
var router = express.Router();
var insurance = require('../controllers/insurance');

router.get('/get', insurance.getInsurances);

module.exports = router;