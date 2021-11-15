const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateMedicationInput(data) {
    let errors = {};

    data.brandName = validText(data.brandName) ? data.brandName : '';
    data.dose = validText(data.dose) ? data.dose : '';
    data.frequency = validText(data.frequency) ? data.frequency : '';
    data.strength = validText(data.strength) ? data.strength : '';

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

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};