const { isEmpty } = require('lodash');

module.exports = (businessObject) => {
    const { name, phone, email, products } = businessObject;
    const errors = [];

    if (isEmpty(name)) {
        errors.push({
            message: 'Name field is required',
            code: 400
        })
    }

    if (isEmpty(phone)) {
        errors.push({
            message: 'phone field is required',
            code: 400
        })
    }

    if (isEmpty(email)) {
        errors.push({
            message: 'email field is required',
            code: 400
        })
    }

    if (isEmpty(products)) {
        errors.push({
            message: 'products field is required',
            code: 400
        })
    }

    return { errors, isValid: !(errors.length > 0) }
}