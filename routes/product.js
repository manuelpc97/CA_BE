var express = require('express');
var router = express.Router();
var productController = require('../controllers/product');

router.post('/create', productController.createProduct);
router.get('/get/:business', productController.getProductByBusiness);

module.exports = router;
