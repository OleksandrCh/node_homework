const {Router} = require('express');

const productRouter = Router();

const {productController} = require('../../controllers');

productRouter.post('/', productController.createProduct);

productRouter.get('/', productController.getAllProduct);

productRouter.get('/:id', productController.getOnceProductOfId);

productRouter.put('/', productController.updateProduct);

productRouter.delete('/:id', productController.deleteProduct);


module.exports = productRouter;
