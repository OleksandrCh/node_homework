const {modelName: {PRODUCT}} = require('../../constants');


module.exports = (sequelize, DataType) => {
    const Products = sequelize.define(PRODUCT, {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataType.STRING,
                allowNull: false,
                unique: true,
            },
            price: {
                type: DataType.INTEGER,
                allowNull: false
            },
            discount: {
                type: DataType.INTEGER,
                allowNull: true
            }
        },
        {
            tableName: 'products',
            timestamps: false
        });

    return Products;
};
