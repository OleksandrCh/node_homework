const {Router} = require('express');

const productRouter = Router();

const {productController} = require('../../controllers');

const productValidate = require('../../middlewares/product/check-is-product-valid.middleware')

productRouter.post('/', productValidate, productController.createProduct);

productRouter.get('/', productController.getAllProducts);

productRouter.get('/:id', productController.getOnceProductOfId);

productRouter.put('/', productController.updateProduct);

productRouter.delete('/:id', productController.deleteProduct);


module.exports = productRouter;
