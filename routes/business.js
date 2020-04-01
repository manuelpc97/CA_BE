var express = require('express');
var router = express.Router();
var businessController = require('../controllers/business');

router.post('/create', businessController.createBusiness);
router.get('/get', businessController.getAllBusinesses);

module.exports = router;