const { isEmpty } = require('lodash');

module.exports = (converObject) => {
    const {
        title,
        type,
        content,
        product,
    } = converObject;
    let errors = [];

    if (isEmpty(title)) {
        errors.push({
            message: 'Title field is required',
            code: 400,
        })
    }
    if (isEmpty(type)) {
        errors.push({
            message: 'Type field is required',
            code: 400
        })
    }
    if (isEmpty(content)) {
        errors.push({
            message: 'Content field is required',
            code: 400,
        })
    }
    if (isEmpty(product)) {
        errors.push({
            message: 'Product field is required',
            code: 400
        })
    }
    return { errors, isValid: !(errors.length > 0) }
}