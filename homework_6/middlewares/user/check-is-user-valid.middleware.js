const Joi = require('joi');

const errorHandler = require('../../error/errorHandler');
const {newUserValidator} = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const user = req.body;

        const {error} = Joi.validate(user, newUserValidator);

        if (error) next(new errorHandler(error.details[0].message, 400));

        next();

    } catch (e) {
        res.render('error', {message: e.message})
    }
}
