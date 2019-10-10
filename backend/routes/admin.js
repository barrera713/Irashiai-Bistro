const router = require('express').Router();
const Admin = require('../models/Admin');
const { adminValidation, partnerValidation } = require('../validations');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');






// Admin resgister (temp)
router.post('/register', async (req, res) => {

    const { error } = adminValidation(req.body)
    if(error) return res.status(401).send(error.details[0].message);

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
router.post('/login', async (req, res) => {
    const { error } = adminValidation(req.body)
    if(error) return res.status(401).send(error.details[0].message);
    
    // check if name is correct
    const admin = await Admin.findOne({ name: req.body.name });
    if(!admin) return res.status(400).send('Name or password is incorrect')

    // check if password is correct 
    const validPassword = await bcrypt.compare(req.body.password, admin.password);
    if(!validPassword) return res.status(400).send('Name or password is incorrect');

    const token = jwt.sign({ _id: admin._id }, process.env.ADMIN_TOKEN);
    res.header('auth-token', token).send(token);
});




module.exports = router;