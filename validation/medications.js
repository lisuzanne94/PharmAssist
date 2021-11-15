const Validator = require('validator');
const validText = require('./valid-text');
const validNumber = require('./valid-number');

module.exports = function validateMedicationInput(data) {
    let errors = {};

    data.brandName = validText(data.brandName) ? data.brandName : '';
    data.dose = validNumber(data.dose) ? data.dose : '';
    data.frequency = validNumber(data.frequency) ? data.frequency : '';

    if (Validator.isEmpty(data.brandName)) {
        errors.brandName = 'Brand name field is required';
    }

    if (Validator.isEmpty(data.dose)) {
        errors.dose = 'Dosage field is required';
    }

    if (Validator.isEmpty(data.frequency)) {
        errors.frequency = 'Frequency field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};