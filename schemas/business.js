var mongoose = require('mongoose');

var business = mongoose.Schema({
    name: {type: String, require: true}, 
    phone: {type: String, require: true}, 
    email: {type: String, require: true}, 
    products: [String]
});

module.exports = mongoose.model('Business', business);