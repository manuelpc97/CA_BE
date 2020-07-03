const formModel = require('../schemas/form');
const FilledForm = require('../schemas/filledForms');

exports.getFormById = async (request, response) => {
    const id = request.params.id;
    try {
        const form = await formModel.findById(id);
        response.status(200).send(form);
    } catch (error) {
        response.send(`There was an error to get business ${error}`);
    }
}

exports.saveFilledForm = async (req, res) => {
    const { filledForm, userId, productId, timestamp } = req.body;
    try {
        const newFilledForm = new FilledForm({
            filledForm,
            userId,
            productId,
            timestamp
        });
        await newFilledForm.save();
        res.status(200).send({message: `Filled form was saved`});
    } catch (error) {
        res.status(500).send(`There was an error to save filled form ${error}`)
    }
}