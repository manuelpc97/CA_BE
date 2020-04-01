var mongoose = require('mongoose');

var business = mongoose.Schema({
    name: {type: String, require: true}, 
    phone: {type: String}, 
    email: {type: String}, 
    products: [String]
});

module.exports = mongoose.model('Business', business);