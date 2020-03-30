var mongoose = require('mongoose');
var validator = require('mongoose-unique-validator');

var user = new mongoose.Schema({
    username : {type: String, unique: true, required: true}, 
    password: {type: String, unique: true, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required:true, unique:true}, 
    id: {type:String, required:true, unique:true}, 
    phone: {type: String, required:true}
});

user.plugin(validator);
module.exports = mongoose.model('User', user);