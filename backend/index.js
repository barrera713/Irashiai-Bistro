const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// Import Routes
const reserveRoute = require('./routes/reservations');
const adminRoute = require('./routes/admin');
const partnerRoute = require('./routes/partner');




dotenv.config();

const app = express();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to db.. .')
});

// Middlewares 
app.use(express.json());

// Route Middlewares
app.use('/admin', adminRoute);
app.use('/', reserveRoute);
app.use('/partner', partnerRoute);



app.listen(5000, () => console.log('Server is running'));