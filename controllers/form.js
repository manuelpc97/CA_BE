const formModel = require('../schemas/form');
const FilledForm = require('../schemas/filledForms');
const productModel = require('../schemas/product');
const businessModel = require('../schemas/business');
const insuranceModel = require('../schemas/insurance');
const {sendEmail} = require('./mail');
const moment = require('moment-timezone');

exports.getFormById = async (request, response) => {
    const id = request.params.id;
    try {
        const form = await formModel.findById(id);
        response.status(200).send(form);
    } catch (error) {
        response.send(`There was an error to get business ${error}`);
    }
}

exports.saveFilledForm = async (req, res) => {
    const { filledForm, userId, timestamp } = req.body;
    const tag = req.body.productId ? 'productId' : 'insuranceId';
    const value = {
        filledForm,
        userId,
        timestamp
    }
    value[tag] = req.body[tag];
    try {
        const newFilledForm = new FilledForm(value);
        await newFilledForm.save();
        sendEmail(filledForm, tag);
        res.status(200).send({ message: `Filled form was saved` });
    } catch (error) {
        res.status(500).send(`There was an error to save filled form ${error}`)
    }
}

exports.getProductFilledForms = async (req, res) => {
    const { userId } = req.params;
    try {
        const filledForms = await FilledForm.find({ userId, productId: { $exists: true } });
        const data = filledForms.map(async form => {
            const { timestamp, productId } = form;
            const { business, insurance, yearPayment } = await productModel.findById({ _id: productId });
            const { name: businessName } = await businessModel.findById({ _id: business });
            const { name: insuranceName } = await insuranceModel.findById({ _id: insurance });
            return {
                timestamp: moment.tz(timestamp, 'America/Tegucigalpa').format('DD/MM/YYYY'),
                yearPayment,
                businessName,
                insuranceName
            }
        });
        const productsObtained = await Promise.all(data);
        res.status(200).send({ totalProducts: filledForms.length, productsObtained });
    } catch (error) {
        res.status(500).send(`There was en error to get filled forms ${error}`)
    }
}