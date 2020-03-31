var express = require('express');
var router = express.Router();
var coverController = require('../controllers/cover');

router.post('/create', coverController.createCover);

module.exports = router;