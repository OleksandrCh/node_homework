const Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().trim().min(2).max(60).required(),
    price: Joi.number().integer().min(0).max(1000000).required(),
    discount: Joi.string().min(6).optional(),
});
