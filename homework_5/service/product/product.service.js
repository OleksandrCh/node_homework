const db = require('../../dataBase').getInstance();

module.exports = {
    getProducts: () => {
        const ProductModel = db.getModel('Products');

        return ProductModel.findAll({});
    },
    getProductOfId: (id) => {
        const ProductModel = db.getModel('Products');

        return ProductModel.findOne({where: {id}})
    },
    createProduct: ({name, price}) => {
        const ProductModel = db.getModel('Products');

        return ProductModel.create({name,price})
    },
    updateProduct: ({name,id,price}) => {
        const ProductModel = db.getModel('Products');

        return ProductModel.update({name,price}, {where: {id}})
    },
    deleteProductOfId: (id) => {
        const ProductModel = db.getModel('Products');

        return ProductModel.destroy({where: {id}})
    },
};
