const db = require('../../dataBase').getInstance();
const {modelName: {PRODUCT}} = require('../../constants');

module.exports = {
    getProducts: () => {
        const ProductModel = db.getModel(PRODUCT);

        return ProductModel.findAll({});
    },
    getProductOfId: (id) => {
        const ProductModel = db.getModel(PRODUCT);

        return ProductModel.findOne({where: {id}})
    },
    createProduct: ({name, price}) => {
        const ProductModel = db.getModel(PRODUCT);

        return ProductModel.create({name,price})
    },
    updateProduct: ({name,id,price}) => {
        const ProductModel = db.getModel(PRODUCT);

        return ProductModel.update({name,price}, {where: {id}})
    },
    deleteProductOfId: (id) => {
        const ProductModel = db.getModel(PRODUCT);

        return ProductModel.destroy({where: {id}})
    },
};
