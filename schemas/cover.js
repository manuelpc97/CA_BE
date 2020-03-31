var mongoose = require('mongoose');

var cover = mongoose.Schema({
    title: {type: String, require: true},
    type: {type:String, require:true},
    content: {type:String, require: true}, 
    extraInfo: {type:String}, 
    product: {type: String, require:true}
});

module.exports = mongoose.model('Cover', cover);