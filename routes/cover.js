var express = require('express');
var router = express.Router();
var coverController = require('../controllers/cover');

router.post('/create', coverController.createCover);
router.get('/getAll', coverController.getAllCovers);
router.get('/get/:product', coverController.getCoverByProduct);
module.exports = router;