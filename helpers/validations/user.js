const { isEmpty } = require('lodash');

module.exports = {
    validateUser(user) {
        const {
            username,
            password,
            firstName,
            lastName,
            email,
            id,
            phone
        } = user;

        const errors = [];

        if (isEmpty(username)) {
            errors.push({
                message: 'username is required',
                code: 400
            });
        }

        if (isEmpty(password)) {
            errors.push({
                message: 'password is required',
                code: 400
            });
        }

        if (isEmpty(firstName)) {
            errors.push({
                message: 'firstName is required',
                code: 400
            });
        }

        if (isEmpty(lastName)) {
            errors.push({
                message: 'lastName is required',
                code: 400
            });
        }

        if (isEmpty(email)) {
            errors.push({
                message: 'email is required',
                code: 400
            });
        }

        if (isEmpty(id)) {
            errors.push({
                message: 'id is required',
                code: 400
            });
        }

        if (isEmpty(phone)) {
            errors.push({
                message: 'phone is required',
                code: 400
            });
        }

        return { errors, isValid: !(errors.length > 0) }
    },
    validateLogIn({ username, password }) {
        const errors = [];
        if (isEmpty(username)) {
            errors.push({
                message: 'username is required',
                code: 400
            })
        }
        if (isEmpty(password)) {
            errors.push({
                message: 'password is required',
                code: 400
            })
        }

        return { errors, isValid: !(errors.length > 0) }
    }
}