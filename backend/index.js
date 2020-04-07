const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require('cors');
app.use(cors());



// Import Routes
const adminRoute = require('./routes/admin');
const partnerRoute = require('./routes/partner');
const resRoute = require('./routes/reservation');



// Connect to DB
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


// Testing for deployment
// app.get('/', (req, res) => {
//     res.send(JSON.stringify({ Hello: 'World'}));
// });



// Route Middlewares
app.use('/admin', adminRoute);
app.use('/reservation', resRoute);
app.use('/employee', partnerRoute);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`)); 