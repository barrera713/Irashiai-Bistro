const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    
    time: {
        type: Date,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    guest: {
        name: {
            type: String,
            required: true,
            max: 1024,
            min: 6
        },
        contact: {
            type: Number,
            required: true,
            max: 12
        }
    }
})

module.exports = mongoose.model('Reservation', reservationSchema);