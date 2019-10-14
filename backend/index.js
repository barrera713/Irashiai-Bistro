const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// Import Routes
const testingRoute = require('./routes/testing');
const adminRoute = require('./routes/admin');
const partnerRoute = require('./routes/partner');
const resRoute = require('./routes/reservation');
const cors = require('cors');




dotenv.config();

const app = express();

// Connect to DB
app.use(cors());
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to db.. .')
});

// Middlewares 
app.use(express.json());

// Route Middlewares
app.use('/admin', adminRoute);
app.use('/', testingRoute);
app.use('/', resRoute);
app.use('/partner', partnerRoute);



app.listen(5000, () => console.log('Server is running'));