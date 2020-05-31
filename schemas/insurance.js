var mongoose = require('mongoose');
var validator = require('mongoose-unique-validator');

var insurance = mongoose.Schema({
    name: {type: String, require: true, unique: true},
    type: {type: String, require: true}
});

insurance.plugin(validator);
module.exports = mongoose.model('Insurance', insurance);