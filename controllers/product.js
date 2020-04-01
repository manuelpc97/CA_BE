var productModel = require('../schemas/product');

exports.createProduct = (request, response) => {
    var product = new productModel({
        rate: request.body.rate,
        business: request.body.business, 
        cover: request.body.cover,
        insurance: request.body.insurance, 
        yearPayment: request.body.yearPayment
    });

    product.save();
    response.sendStatus(200);
}

exports.getProductByBusiness = (request, response) => {
    var business = request.params.business;
    productModel.find({business}, (error, products) => {
        if(error){
            response.sendStatus(500);
        }else{
            response.send(products);
        }
    });
}