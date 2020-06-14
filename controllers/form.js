const formModel = require('../schemas/form');

exports.getFormById = async (request, response) => {
    const id = request.params.id;
    try {
        const form = await formModel.findById(id);
        response.status(200).send(form);
    } catch (error) {
        response.send(`There was an error to get business ${error}`);
    }
}