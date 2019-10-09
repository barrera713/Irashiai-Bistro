const router = require('express').Router();
const User = require('../models/User');
const Admin = require('../models/Admin');
const { registerValidation, loginValidation, adminValidation } = require('../validations');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// REGISTER 
router.post('/register', async (req, res) => {

    const { error } = registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);

    // Check if user exists
    const emailExist = await User.findOne({ email: req.body.email });
    if(emailExist) return res.status(400).send('Email already exists.'); 

    // Hash password
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password: hashedPassword
    })
    try{
        const savedUser = await newUser.save();
        res.send({ savedUser: savedUser.id }); 
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
    if(!user) return res.status(400).send('Email or password is incorrect');
    // Check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Email or password is incorrect');

    const token = jwt.sign({  _id: user._id }, process.env.TOKEN);
    res.header('Bearer', token).send(token);
    res.send('Logged in!');
});




// Admin resgister (temp)
router.post('/register-admin', async (req, res) => {

    const { error } = adminValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);

    // Hash password
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create admin
    const newAdmin = new Admin({
        name: req.body.name,
        password: hashedPassword
    })
    try{
        const savedAdmin = await newAdmin.save();
        res.send({ savedAdmin: savedAdmin.id }); 
    }catch(err){
        res.status(400).send(err)
    }
});


// Admin login
router.post('/admin', async (req, res) => {
    const { error } = adminValidation(req.body)
    if(error) return res.status(401).send(error.details[0].message);

    const admin = await Admin.findOne({ name: req.body.name });
    if(!admin) return res.status(400).send('Name or password is incorrect')

    const token = jwt.sign({ _id: admin._id }, process.env.ADMIN_TOKEN);
    res.header('Bearer', token).send(token);
    res.send('Success');
})



module.exports = router;