const coverModel = require('../schemas/cover');
const validateCover = require('../helpers/validations/cover');

exports.createCover = async (request, response) => {
    const coverObject = request.body
    const { isValid, errors } = validateCover(coverObject);

    try {

        if (!isValid) {
            return response.status(400).send(errors);
        }

        const { title, type, content, extraInfo, product } = request.body;

        const cover = new coverModel({
            title,
            type,
            content,
            extraInfo,
            product
        });

        await cover.save();
        return response.status(200).send(`Cover ${title} was created`);
    } catch (error) {
        return response.status(500).send(`There was an error to create a conver: ${error}`)
    }
}

exports.getCoverByProduct = (request, response) => {
    var product = request.params.product;
    coverModel.find({ product }, (error, covers) => {
        if (error) {
            response.sendStatus(500);
        } else {
            response.send(covers);
        }
    })
}

exports.getAllCovers = async (request, response) => {
    try {
        const covers = await coverModel.find({});
        response.status(200).send(covers);
    } catch (error) {
        response.send(`There was an error to get business ${error}`);
    }
}