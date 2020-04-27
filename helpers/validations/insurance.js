const { isEmpty } = require('lodash');

module.exports = (insuranceObject) => {
    const { name, image } = insuranceObject;
    let errors = [];

    if (isEmpty(name)) {
        errors.push({
            message: 'Name field is required',
            code: 400
        });
    }

    if (isEmpty(image)) {
        errors.push({
            message: 'Image field is required',
            code: 400
        });
    }

    return { errors, isValid: !(errors.length > 0) }
}   