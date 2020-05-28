const db = require('../../dataBase').getInstance();

module.exports = {
    getProducts: () => {
        const ProductModel = db.getModel('Products');

        return ProductModel.findAll({});
    },
    getProductOfId: (id) => {
        const ProductModel = db.getModel('Products');

        return ProductModel.findOne({Where: {id}})
    },
    createProduct: (product) => {
        const ProductModel = db.getModel('Products');

        return ProductModel.create(product)
    },
    updateProduct: ({name,id,price}) => {
        const ProductModel = db.getModel('Products');

        return ProductModel.update({name,price}, {Where: {id}})
    },
    // deleteAllProduct: () => {
    //     return this.ProductModel.delete({Where: {}})
    // },
    deleteProductOfId: (id) => {
        const ProductModel = db.getModel('Products');

        return ProductModel.delete({Where: {id}})
    },
};
