const {Router} = require('express');

const productRouter = Router();

const {productController} = require('../../controllers');

const {checkIsBaseHaveProduct, productValidate} = require('../../middlewares');

productRouter.post('/', productValidate, productController.createProduct);

productRouter.get('/', productController.getAllProducts);

productRouter.get('/:idProduct', checkIsBaseHaveProduct, productController.getOnceProductOfId);

productRouter.put('/:idProduct', checkIsBaseHaveProduct, productValidate, productController.updateProduct);

productRouter.delete('/:idProduct', checkIsBaseHaveProduct, productController.deleteProduct);


module.exports = productRouter;
