const {productService} = require('../../service');

module.exports = {
    getAllProduct: async (req, res) => {
        let product = await productService.getProduct();
        res.json({product});
    },

    getOnceProductOfId: async (req, res) => {
        const {id} = req.params;
        await productService.getProductOfId(id);
        res.end();
    },

    updateProduct: async (req, res) => {
        const change = req.body;
        await productService.updateProduct(change.id,change);
        let product = await productService.getProduct();

        res.end()
    },

    deleteProduct: async (req, res) => {
        const params = req.params;
        const query = req.query;

        console.log('params ',params);
        console.log('query ',query);

        res.end()
    },

    createProduct: async (req, res) => {
        await productService.createProduct(req.body);

        res.redirect('/products')
    }
};
