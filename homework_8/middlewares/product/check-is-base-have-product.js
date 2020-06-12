const {productService} = require('../../service');
const errorHandler = require('../../error/errorHandler');


module.exports = async (req, res, next) => {
    try {
        const {idProduct} = req.params;
        if (+idProduct < 0) return next(new errorHandler('Не верные данные!', 404));

        const productOfId = await productService.getProductOfId(idProduct);
        if (!productOfId) return next(new errorHandler('По вашему запросу продукт не найден!', 404));

        next()
    } catch (e) {
        res.json(e)
    }
};
