const productModel = require('../schemas/product');
const validateProduct = require('../helpers/validations/product');

exports.createProduct = async (request, response) => {
    const productObject = request.body;

    const { isValid, errors } = validateProduct(productObject);

    try {
        if (!isValid) {
            return response.status(400).send(errors);
        }

        const {
            rate,
            business,
            cover,
            insurance,
            yearPayment
        } = request.body

        const product = new productModel({
            rate,
            business,
            cover,
            insurance,
            yearPayment
        });

        await product.save();
        return response.status(200).send(`The product was created`);
    } catch (error) {
        return response.status(500).send(`There was an error to create a product: ${error}`)
    }
}

exports.getProductByBusiness = (request, response) => {
    var business = request.params.business;
    productModel.find({ business }, (error, products) => {
        if (error) {
            response.sendStatus(500);
        } else {
            response.send(products);
        }
    });
}