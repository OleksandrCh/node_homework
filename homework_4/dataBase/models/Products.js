module.exports = (sequelize, DataType) => {
    const Products = sequelize.define('Products', {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataType.STRING,
                allowNull: false,
                unique: true,
                validate: {is: ["^[a-z]+$", 'i']}
            },
            price: {
                type: DataType.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'products',
            timestamps: false
        });

    return Products;
};
