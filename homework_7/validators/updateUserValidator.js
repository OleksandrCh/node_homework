const Joi = require('joi');

module.exports = Joi.object().keys({
    email: Joi.string().trim().min(2).max(60).optional(),
    password: Joi.string().trim().min(0).max(100).optional(),
});
