var businessModel = require('../schemas/business');

exports.createBusiness = (request, response) => {
    var business = new businessModel({
        name: request.body.name,
        phone: request.body.phone,
        email: request.body.email, 
        products: request.body.products
    });

    business.save();
    response.sendStatus(200);
}