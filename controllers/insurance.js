const insurance = require('../schemas/insurance');
const validateInsurance = require('../helpers/validations/insurance');

exports.getInsurances = (request, response) => {
    insurance.find({}, (error, insurances) => {
        if (error) {
            response.sendStatus(500);
        } else {
            response.send(insurances);
        }
    });
}

exports.createInsurance = async (request, response) => {
    const insuranceObject = request.body;
    const { isValid, errors } = validateInsurance(insuranceObject);
    try {
        if (!isValid) {
            return response.status(400).send(errors);
        }

        const { name, image } = request.body;
        const newInsurance = new insurance({ name, image });
        await newInsurance.save();
        return response.status(200).send(`Cover ${name} was created`);
    } catch (error) {
        return response.status(500).send(`There was an error to create an insurance: ${error}`)
    }
}