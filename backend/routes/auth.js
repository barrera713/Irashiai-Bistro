const router = require('express').Router();
const User = require('../models/User');
const { registerValidation, loginValidation } = require('../validations');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// REGISTER
router.post('/signup', async (req, res) => {

    const { error } = registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);

    // Check if user exists
    const user = await User.findOne({ email: req.body.email });
    if(emailExist) return res.status(400).send('Email already exists.'); 

    // Hash password
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    try{
        const savedUser = await newUser.save();
        res.send({ user: user.id }); 
    }catch(err){
        res.status(400).send(err)
    }
});


// LOGIN
router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);

    // Check if email exists
    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).send('Email or password is wrong');
    // Check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Email or password is wrong');

    const token = jwt.sign({  _id: user._id }, process.env.TOKEN);
    res.header('Bearer', token).send(token);
    res.send('Logged in!');
});


router.get('/user  ')

module.exports = router;