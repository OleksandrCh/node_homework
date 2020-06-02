const {productService} = require('../../service');

module.exports = async (req, res, next) => {
    const {productId} = req.params;
    const productOfId = await productService.getProductOfId(productId);


};
