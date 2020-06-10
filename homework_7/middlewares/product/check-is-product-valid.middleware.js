const Joi = require('joi');

const {newProductValidator} = require('../../validators');
const errorHandler = require('../../error/errorHandler');
const {changeProductValidator} = require("../../validators");
const {hashPassword} = require("../../helpers");


module.exports = async (req, res, next) => {
    try {
        const product = req.body;

        if (product.discount) {
            const discount = await hashPassword(product.discount);
            req.body.discount = discount
        }

        const {error} = Joi.validate(product, product.name && product.price && newProductValidator || changeProductValidator);
        if (error) next(new errorHandler(`Не подходящий продукт! Ошибка ${error.details[0].message}`, 400));

        next();
    } catch (e) {
        res.render({message: e.message})
    }
};
