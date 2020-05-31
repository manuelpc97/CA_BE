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

exports.getAllProducts = async (request, response) => {
    try {
        const product = await productModel.find({});
        response.status(200).send(product);
    } catch (error) {
        response.send(`There was an error to get business ${error}`);
    }
}

exports.getProductByBusiness = async (request, response) => {
    try {
        const { business } = request.params;
        const  businessResponse = await productModel.find({ business });
        response.status(200).send(businessResponse);
    } catch (error) {
        response.send(`There was an error to get products by business: ${error}`)
    }
}

exports.getProductByInsurance = async (request, response) => {
    try {
        const { insurance } = request.params;
        const  businessResponse = await productModel.find({ insurance });
        response.status(200).send(businessResponse);
    } catch (error) {
        response.send(`There was an error to get products by insurance: ${error}`)
    }
}