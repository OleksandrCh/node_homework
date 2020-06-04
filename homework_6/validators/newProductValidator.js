const Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().trim().min(2).max(60).required(),
    price: Joi.number().integer().min(0),
    discount: Joi.number().integer().min(0),
});
