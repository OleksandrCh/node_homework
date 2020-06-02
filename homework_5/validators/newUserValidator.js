const Joi = require('joi');

const {emailRegEx} = require('../constants');

module.exports = Joi.object().keys({
    name: Joi.string().trim().min(2).max(60).required(),
    email: Joi.string().regex(emailRegEx.EMAIL).required(),
    password: Joi.string().trim().min(8).required(),
    age: Joi.number().integer().min(0).max(140),
});
