const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Medication = require('../../models/Medication');
const validateMedicationInput = require('../../validation/medications');

router.get('/user/:user_id', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
    Medication.find({user: req.params.user_id})
        .then(medications => res.json(medications))
        .catch(err =>
            res.status(404).json({ nomedicationsfound: 'No medications found from that user' }
            )    
        );
});

router.get('/:id', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
    Medication.findById(req.params.id)
        .then(medication => res.json(medication))
        .catch(err =>
            res.status(404).json({ nomedicationfound: 'No medication found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateMedicationInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newMedication = new Medication({
            brandName: req.body.brandName,
            dose: req.body.dose,
            frequency: req.body.frequency,
            user: req.user.id
        });

        newMedication.save().then(medication => res.json(medication));
    }
);

router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const medication = await Medication.findOne({ id: req.params.id })

            if (req.body.brandName) {
                medication.brandName = req.body.brandName
            }

            if (req.body.dose) {
                medication.dose = req.body.dose
            }

            if (req.body.frequency) {
                medication.frequency = req.body.frequency
            }

            await medication.save().then(medication => res.json(medication));
        } catch {
            res.status(404).json({ nomedicationfound: 'No medication found with that ID' })
        }
    }
);


module.exports = router;