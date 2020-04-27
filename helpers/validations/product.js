const { isEmpty } = require('lodash');

module.exports = (productObject) => {
    const {
        rate,
        business,
        cover,
        insurance,
        yearPayment
    } = productObject;

    const errors = [];
    if (isEmpty(rate)) {
        errors.push({
            message: 'Rate field is required',
            code: 400
        })
    }
    if (isEmpty(business)) {
        errors.push({
            message: 'business field is required',
            code: 400
        })
    }
    if (isEmpty(cover)) {
        errors.push({
            message: 'cover field is required',
            code: 400
        })
    }
    if (isEmpty(insurance)) {
        errors.push({
            message: 'insurance field is required',
            code: 400
        })
    }
    if (isEmpty(yearPayment)) {
        errors.push({
            message: 'yearPayment field is required',
            code: 400
        })
    }

    return { errors, isValid: !(errors.length > 0) }
}