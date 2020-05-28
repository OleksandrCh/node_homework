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

        return ProductModel.update({name,price}, {where: {id: id}})
    },
    deleteProductOfId: (id) => {
        const ProductModel = db.getModel('Products');

        return ProductModel.destroy({where: {id: id}})
    },
};
