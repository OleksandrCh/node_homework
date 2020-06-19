const Joi = require('joi');

const errorHandler = require('../../error/errorHandler');
const {newProductValidator, changeProductValidator} = require('../../validators');
const {statusCode,customError} = require('../../constants');

module.exports = async (req, res, next) => {
    try {
        const product = req.body;

        const {error} = Joi.validate(product, product.name && product.price && newProductValidator || changeProductValidator);
        if (error) next(new errorHandler(`${customError.NOT_VALID.message} ${error.details[0].message}`, statusCode.NOT_FOUND));

        next();
    } catch (e) {
        res.render({message: e.message})
    }
};
