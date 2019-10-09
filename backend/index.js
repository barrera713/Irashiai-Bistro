const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


// Import Routes
const authRoute = require('./routes/auth');

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
app.use('/', authRoute);



app.listen(5000, () => console.log('Server is running'));