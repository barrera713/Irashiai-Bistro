const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// Import Routes
const adminRoute = require('./routes/admin');
const partnerRoute = require('./routes/partner');
const resRoute = require('./routes/reservation');
const cors = require('cors');
const path = require('path');





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

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, 'website/build')));
// }
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../website/build/index.html'));
// });

// Route Middlewares
app.use('/admin', adminRoute);
app.use('/reservation', resRoute);
app.use('/partner', partnerRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server is running')); 