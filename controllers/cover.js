var coverModel = require('../schemas/cover');

exports.createCover = (request, response) => {
    var cover = new coverModel({
        title: request.body.title,
        type: request.body.type,
        content: request.body.content, 
        extraInfo: request.body.extraInfo,
        product: request.body.request
    });

    cover.save();
    response.sendStatus(200);
}