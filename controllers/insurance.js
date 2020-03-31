var insurance = require('../schemas/insurance');

exports.getInsurances = (request, response) => {
    insurance.find({}, (error, insurances) => {
        if(error){
            response.sendStatus(500);
        }else{
            response.send(insurances);
        }
    });
}

exports.createInsurance = (request, response) => {
    try{
        var newInsurance = new insurance({
            name: request.body.name,
            image: request.body.image
        });
        newInsurance.save();
        response.sendStatus(200);
    }catch(e){
        response.sendStatus(500);
    }
}