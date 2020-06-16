var mongoose = require('mongoose');

var product = mongoose.Schema({
    rate: {type: String}, 
    business: {type: String, require: true}, 
    cover: [String], 
    insurance: {type: String, require: true}, 
    yearPayment: {type: String, require: true},
    form : {type: String}
});

module.exports = mongoose.model('Product', product);