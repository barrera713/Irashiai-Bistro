const Joi = require('@hapi/joi');

// register validation
const registerValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(), 
        contact: Joi.string().max(12)
    })
    return schema.validate(data);
};

// login validation
const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })
    return schema.validate(data);
};

// admin validation
const adminValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    })
    return schema.validate(data)
};


const partnerValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    })
    return schema.validate(data)
};


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.adminValidation = adminValidation;
module.exports.partnerValidation = partnerValidation;