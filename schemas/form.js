var mongoose = require('mongoose');

var form = mongoose.Schema({
    form: {type: String, require: true}
});

module.exports = mongoose.model('Form', form);