var coverModel = require('../schemas/cover');

exports.createCover = (request, response) => {
    var cover = new coverModel({
        title: request.body.title,
        type: request.body.type,
        content: request.body.content, 
        extraInfo: request.body.extraInfo,
        product: request.body.product
    });

    cover.save();
    response.sendStatus(200);
}

exports.getCoverByProduct = (request, response) => {
    var product = request.params.product;
    coverModel.find({product}, (error, covers) => {
        if(error){
            response.sendStatus(500);
        }else{
            response.send(covers);
        }
    })
}