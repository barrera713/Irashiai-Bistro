const router = require('express').Router();
const Partner = require('../models/Partner');
const { partnerValidation } = require('../validations');
const { adminAuth } = require('./varifyToken');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');





// Register partner 
router.post('/new-partner', adminAuth, async (req, res) => {
    
    const { error } = partnerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message)

    // Hash password
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    // Create partner
    const newPartner = new Partner({
        name: req.body.name,
        password: hashedPassword
    })
    try {
        const savedPartner = await newPartner.save();
        res.send({ savedPartner : savedPartner.id });
    } catch (err) {
        res.status(400).send(err)
    }
});



// Partner login
router.post('/login', async (req, res) => {
    const { error } = partnerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // check if name is correct
    const partner = await Partner.findOne({ name: req.body.name });
    if(!partner) return res.status(400).send('Name or password is incorrect');
    
    // Check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, partner.password);
    if(!validPassword) return res.status(400).send('Email or password is incorrect');
    
    // const token = jwt.sign({  _id: partner._id }, process.env.PARTNER_TOKEN);
    // res.header('auth-token', token).send(token);
    // console.log(token)

    // jwt.sign({ _id: partner._id }, 'token', (err, token) => {
    //     res.json({
    //         token
    //     });
    // });

    const token = jwt.sign({ _id: partner._id }, process.env.PARTNER_TOKEN);
    res.send({ 'token': token })
    
});


module.exports = router;