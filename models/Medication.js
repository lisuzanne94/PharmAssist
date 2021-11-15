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
        type: Number,
        required: true
    },
    frequency: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports = Medication = mongoose.model('Medication', MedicationSchema);