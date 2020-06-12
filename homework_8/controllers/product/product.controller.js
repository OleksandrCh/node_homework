const {productService} = require('../../service');
const {hashPassword} = require('../../helpers');
const {emailActionEnum, statusCode: {OK}} = require('../../constants');
const {userService, emailService} = require('../../service');

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

            const user = await userService.getUsersOfId(req.userId);
            await emailService.sendMail(user.email, emailActionEnum.PRODUCT_UPDATE, {userName: user.name});

            res.json({product})
        } catch (e) {
            res.json(e)
        }

    },

    deleteProduct: async (req, res, next) => {
        try {
            const {idProduct} = req.params;

            await productService.deleteProductOfId(idProduct);

            const user = await userService.getUsersOfId(req.userId);
            await emailService.sendMail(user.email, emailActionEnum.PRODUCT_DELETE, {userName: user.name});

            res.json({message: 'Продукт удалён!'})
        } catch (e) {
            next(e)
        }
    },

    createProduct: async (req, res, next) => {
        try {
            const userId = req.userId;

            if (req.body.discount) {
                const discount = await hashPassword(req.body.discount);
                req.body.discount = discount;
            }

            req.body.userId = userId;

            await productService.createProduct(req.body);

            const user = await userService.getUsersOfId(req.userId);
            await emailService.sendMail(user.email, emailActionEnum.PRODUCT_CREATE, {userName: user.name});

            res.json({message: 'Объект создан'})
        } catch (e) {
            res.json(e.message);
        }
    }
};
