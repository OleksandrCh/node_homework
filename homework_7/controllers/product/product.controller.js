const {productService} = require('../../service');
const {hashPassword} = require('../../helpers');
const errorHandler = require('../../error/errorHandler');

module.exports = {
    getAllProducts: async (req, res) => {
        const products = await productService.getProducts();
        res.json({products});
    },

    getOnceProductOfId: async (req, res) => {
        const {idProduct} = req.params;
        const product = await productService.getProductOfId(idProduct);
        res.json({product});
    },

    updateProduct: async (req, res, next) => {
        try {
            const change = req.body;
            const {idProduct} = req.params;


            await productService.updateProduct(change, idProduct);
            const product = await productService.getProductOfId(idProduct);
            res.json({product})
        } catch (e) {
            res.json(e)
        }

    },

    deleteProduct: async (req, res) => {
        const {idProduct} = req.params;
        try {
            await productService.deleteProductOfId(idProduct);

            res.json({message: 'Продукт удалён!'})
        } catch (e) {
            res.json(e)
        }
    },

    createProduct: async (req, res) => {
        try {
            const discount = await hashPassword(req.body.discount);
            req.body.discount = discount;
            await productService.createProduct(req.body);

            res.json({message: 'Объект создан'})
        } catch (e) {
            res.json(e.message);
        }
    }
};
