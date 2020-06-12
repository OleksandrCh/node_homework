const Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().trim().min(2).max(60).optional(),
    price: Joi.number().integer().min(0).max(1000000).optional(),
    discount: Joi.string().trim().min(6).optional(),
});
