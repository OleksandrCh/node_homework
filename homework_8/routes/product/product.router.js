const {Router} = require('express');

const productRouter = Router();

const {productController} = require('../../controllers');
const {checkIsBaseHaveProduct, productValidate,checkAccessToken, checkerFile} = require('../../middlewares');

productRouter.post('/', productValidate , checkAccessToken, checkerFile, productController.createProduct);
productRouter.get('/', productController.getAllProducts);
productRouter.get('/:idProduct', checkIsBaseHaveProduct, productController.getOnceProductOfId);
productRouter.put('/:idProduct', checkAccessToken, checkIsBaseHaveProduct, productValidate, productController.updateProduct);
productRouter.delete('/:idProduct', checkAccessToken, checkIsBaseHaveProduct, productController.deleteProduct);

module.exports = productRouter;
