const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    brandName: {
        type: String,
        required: true
    },
    dose: {
        type: String,
        required: true
    },
    frequency: {
        type: String,
        required: true
    },
    strength: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = Medication = mongoose.model('Medication', MedicationSchema);