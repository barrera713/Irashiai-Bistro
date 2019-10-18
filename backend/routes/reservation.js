const router = require('express').Router();
const Reservation = require('../models/Reservation');
const { resValidation } = require('../validations');

// Create reservation
router.post('/reserve', async (req, res) => {
    // Validate input data
    const { error } = resValidation(req.body);
    if(error) return res.status(400).send(error);
    
    const resAlreadyExist = await Reservation.findOne({ date: req.body.date, time: req.body.time })
    if(resAlreadyExist) return res.status(400).send({ error: 'Reservation has already been taken'})

    const newReservation = new Reservation({
        date: req.body.date,
        time: req.body.time,
        count: req.body.count,
        guest: {
            name: req.body.guest.name,
            contact: req.body.guest.contact
        }
    })


    try {
        const savedReservation = await newReservation.save();
        res.send({ savedReservation: savedReservation.id });
    } catch (err) {
        res.status(400).send(err)
    }

});

module.exports = router;
