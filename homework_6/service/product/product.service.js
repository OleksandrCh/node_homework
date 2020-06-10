const db = require('../../dataBase').getInstance();

const {modelName: {PRODUCT}} = require('../../constants');

module.exports = {
    getProducts: () => {
        const ProductModel = db.getModel(PRODUCT);

        return ProductModel.findAll({});
    },
    getProductOfId: (idProduct) => {
        const ProductModel = db.getModel(PRODUCT);

        return ProductModel.findOne({where: {id: idProduct}})
    },
    createProduct: (product) => {
        const ProductModel = db.getModel(PRODUCT);

        return ProductModel.create(product)
    },
    updateProduct: (product, idProduct) => {
        const ProductModel = db.getModel(PRODUCT);

        return ProductModel.update(product, {where: {id: idProduct}})
    },
    deleteProductOfId: (idProduct) => {
        const ProductModel = db.getModel(PRODUCT);

        return ProductModel.destroy({where: {id: idProduct}})
    },
};
