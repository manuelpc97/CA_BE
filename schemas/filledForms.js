const mongoose = require('mongoose');

const filled_forms = mongoose.Schema({
    filledForm: { type: String, required: true },
    userId: { type: String, required: true },
    productId: { type: String, required: false },
    insuranceId: {type: String, required: false},
    timestamp: { type: Date, required: true }
});

module.exports = mongoose.model('filled_Form', filled_forms);