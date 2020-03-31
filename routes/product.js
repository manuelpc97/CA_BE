var express = require('express');
var router = express.Router();
var productController = require('../controllers/product');

router.post('/create', productController.createProduct);

module.exports = router;
