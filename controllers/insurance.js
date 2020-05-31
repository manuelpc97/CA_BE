const insurance = require('../schemas/insurance');
const validateInsurance = require('../helpers/validations/insurance');

exports.getInsurances = async (request, response) => {
    try {
        const insurances = await insurance.find({});
        response.status(200).send(insurances);
    } catch (error) {
        response.send(`There was an error to get insurancces ${error}`);
    }
}

exports.createInsurance = async (request, response) => {
    const insuranceObject = request.body;
    const { isValid, errors } = validateInsurance(insuranceObject);
    try {
        if (!isValid) {
            return response.status(400).send(errors);
        }

        const { name, type } = request.body;
        const newInsurance = new insurance({ name, type });
        await newInsurance.save();
        return response.status(200).send(`Cover ${name} was created`);
    } catch (error) {
        return response.status(500).send(`There was an error to create an insurance: ${error}`)
    }
}