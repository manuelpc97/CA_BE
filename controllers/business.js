const businessModel = require('../schemas/business');
const validateBusiness = require('../helpers/validations/business');

exports.createBusiness = async (request, response) => {
    const businessObject = request.body;
    const { isValid, errors } = validateBusiness(businessObject);

    try {
        if (!isValid) {
            return response.status(400).send(errors);
        }

        const { name, phone, email, products } = request.body;

        const business = new businessModel({
            name,
            phone,
            email,
            products
        });

        await business.save();
        return response.status(200).send(`The business ${name} was created`);
    } catch (error) {
        return response.status(500).send(`There was an error to create a business: ${error}`);
    }
}

exports.getAllBusinesses = async (request, response) => {
    try {
        const business = await businessModel.find({});
        response.status(200).send(business);
    } catch (error) {
        response.send(`There was an error to get business ${error}`);
    }
}