const {productService} = require('../../service');

module.exports = {
    getAllProducts: async (req, res) => {
        const products = await productService.getProducts();
        res.json({products});
    },

    getOnceProductOfId: async (req, res) => {
        const {id} = req.params;
        console.log(req.query);
        const product = await productService.getProductOfId(id);
        res.json({product});
    },

    updateProduct: async (req, res) => {
        const change = req.body;

        try {
            await productService.updateProduct(change);
        } catch (e) {
            res.json(e)
        }

        res.end()
    },

    deleteProduct: async (req, res) => {
        const {id} = req.params;
        try {
            const product = await productService.deleteProductOfId(id);

            res.json({product})
        } catch (e) {
            res.json(e)
        }
    },

    createProduct: async (req, res) => {
        try {
            const product = await productService.createProduct(req.body);
            res.json({message: 'Объект создан'})
        } catch (e) {
            res.json(e);
        }
        res.json({message: 'Объект создан'})
    }
};
