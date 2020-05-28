const {productService} = require('../../service');

module.exports = {
    getAllProduct: async (req, res) => {
        let product = await productService.getProduct();
        res.json({product});
    },

    getOnceProductOfId: async (req, res) => {
        const {id} = req.params;
        let product = await productService.getProductOfId(id);
        res.json({product});
    },

    updateProduct: async (req, res) => {
        const change = req.body;
        await productService.updateProduct(change.id,change);
        let product = await productService.getProduct();

        res.json({product})
    },

    deleteProduct: async (req, res) => {
        const {id} = req.params;

        let product = await productService.deleteProductOfId(id);

        res.json({product})
    },

    createProduct: async (req, res) => {
        await productService.createProduct(req.body);

        res.redirect('/products')
    }
};
