const Joi = require('@hapi/joi');

// reservation validation
const resValidation = data => {
    const schema = Joi.object({
        date: Joi.date().required(),
        time: Joi.string().required(),
        count: Joi.number().required(),
        guest: Joi.object().keys({
            name: Joi.string().min(6).required(),
            contact: Joi.string().max(12)
        })
    })
    return schema.validate(data)
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


module.exports.adminValidation = adminValidation;
module.exports.partnerValidation = partnerValidation;
module.exports.resValidation = resValidation;