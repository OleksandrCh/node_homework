const {modelName: {USER}} = require('../../constants');

module.exports = (sequelize, DataType) => {
    const Users = sequelize.define(USER, {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            email: {
                type: DataType.STRING,
                unique: true,
                allowNull: false,
            },
            name: {
                type: DataType.STRING,
                allowNull: false
            },
            password: {
                type: DataType.STRING,
                allowNull: false
            },
            age: {
                type: DataType.INTEGER,
                allowNull: false
            },
            avatar: {
                type: DataType.STRING,
            }
        },
        {
            tableName: 'users',
            timestamps: false
        });

    return Users;
};
