const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const Medication = require('../../models/Medication');
const validateMedicationInput = require('../../validation/medications');

router.get("/test", (req, res) => res.json({ msg: "This is the medications route" }));

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
    async (req, res) => {
        const { errors, isValid } = validateMedicationInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newMedication = new Medication({
            brandName: req.body.brandName,
            dose: req.body.dose,
            frequency: req.body.frequency,
            strength: req.body.strength,
            duration: req.body.duration,
            startDate: req.body.startDate,
            user: req.user.id
        });

        await newMedication.save().then(medication => res.json(medication));
    }
);

router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const medication = await Medication.findOne({ _id: req.params.id })

            if (req.body.brandName) {
                medication.brandName = req.body.brandName
            }

            if (req.body.dose) {
                medication.dose = req.body.dose
            }

            if (req.body.frequency) {
                medication.frequency = req.body.frequency
            }
            
            if (req.body.strength) {
                medication.strength = req.body.strength
            }

            if (req.body.duration) {
                medication.duration = req.body.duration
            }

            if (req.body.startDate) {
                medication.startDate = req.body.startDate
            }

            await medication.save().then(medication => res.json(medication));
        } catch {
            res.status(404).json({ nomedicationfound: 'No medication found with that ID' })
        }
    }
);

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            await Medication.deleteOne({ _id: req.params.id })
            res.status(204).send()
        } catch {
            res.status(404).json({ nomedicationfound: 'No medication found with that ID' })
        }
    }
);

module.exports = router;