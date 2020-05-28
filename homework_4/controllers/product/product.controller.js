const {productService} = require('../../service');

module.exports = {
    getAllProducts: async (req, res) => {
        const products = await productService.getProducts();
        console.log(products);
        res.json({products});
    },

    getOnceProductOfId: async (req, res) => {
        const {id} = req.params;
        const product = await productService.getProductOfId(id);
        res.json({product});
    },

    updateProduct: async (req, res) => {
        const change = req.body;
        console.log('__________________________');
        console.log(change);
        console.log('__________________________');
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
        } catch (e) {
            res.json(e);
        }
        res.json({message: 'Объект создан'})
    }
};
