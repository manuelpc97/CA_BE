var mongoose = require('mongoose');

var product = mongoose.Schema({
    rate: {type: String, require: true}, 
    business: {type: String, require: true}, 
    cover: [String], 
    insurance: {type: String, require: true}, 
    yearPayment: {type: String, require: true}
});

module.exports = mongoose.model('Product', product);