const router = require('express').Router();
const Reservation = require('../models/Reservation');
const { resValidation } = require('../validations');
const { partnerAuth } = require('./varifyToken');

// Create reservation
router.post('/reserve', async (req, res) => {
    // Validate input data
    const { error } = resValidation(req.body);
    if(error) return res.status(400).send(error);
    
    const resAlreadyExist = await Reservation.findOne({ date: req.body.date, time: req.body.time });
    if(resAlreadyExist) return res.status(400).send({ error: 'A reservation has already been made for this time.'});

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
        res.send({ savedReservation });
    } catch (err) {
        res.status(400).send(err)
    }

});


// Get all reservations
router.get('/reservations', partnerAuth, async (req, res) => {
    try{
        const properties = await Reservation.find();
        res.json(properties);
    } catch(err) {
        if(err) return res.status(401).send({ error: 'Access denied'})
    }
});

module.exports = router;
