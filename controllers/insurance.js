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