const Joi = require('joi');

const errorHandler = require('../../error/errorHandler');
const {newProductValidator, changeProductValidator} = require('../../validators');

module.exports = async (req, res, next) => {
    try {
        const product = req.body;

        const {error} = Joi.validate(product, product.name && product.price && newProductValidator || changeProductValidator);
        if (error) next(new errorHandler(`Не подходящий продукт! Ошибка ${error.details[0].message}`, 400));

        next();
    } catch (e) {
        res.render({message: e.message})
    }
};
