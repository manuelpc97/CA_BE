var express = require('express');
var router = express.Router();
var productController = require('../controllers/product');

router.post('/create', productController.createProduct);
router.get('/get', productController.getAllProducts);
router.get('/getByBusiness/:business', productController.getProductByBusiness);
router.get('/getByInsurance/:insurance', productController.getProductByInsurance);

module.exports = router;
