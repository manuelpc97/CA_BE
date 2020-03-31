var express = require('express');
var router = express.Router();
var insurance = require('../controllers/insurance');

router.get('/get', insurance.getInsurances);
router.post('/create', insurance.createInsurance);

module.exports = router;