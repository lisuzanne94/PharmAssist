const Validator = require('validator');
const validText = require('./valid-text');
const validDate = require('./valid-date');

module.exports = function validateMedicationInput(data) {
    let errors = {};

    data.brandName = validText(data.brandName) ? data.brandName : '';
    data.dose = validText(data.dose) ? data.dose : '';
    data.frequency = validText(data.frequency) ? data.frequency : '';
    data.strength = validText(data.strength) ? data.strength : '';
    data.duration = validText(data.duration) ? data.duration : '';
    data.date = validDate(data.date) ? data.date : '';

    if (Validator.isEmpty(data.brandName)) {
        errors.brandName = 'Brand name field is required';
    }

    if (Validator.isEmpty(data.dose)) {
        errors.dose = 'Dosage field is required';
    }

    if (Validator.isEmpty(data.frequency)) {
        errors.frequency = 'Frequency field is required';
    }
    
    if (Validator.isEmpty(data.strength)) {
        errors.strength = 'Strength field is required';
    }

    // make sure form input is date
    if ((!Validator.isEmpty(data.date)) && !(Validator.isDate(data.date))) {
        errors.date = 'Date is not valid';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};