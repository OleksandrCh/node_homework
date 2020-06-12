const {modelName: {TOKEN}} = require('../../constants');


module.exports = (sequelize, DataType) => {
    const Tokens = sequelize.define(TOKEN, {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId: {
                type: DataType.INTEGER,
                allowNull: false,
            },
            accessToken: {
                type: DataType.STRING,
                allowNull: false
            },
            refreshToken: {
                type: DataType.STRING,
                allowNull: false
            },
            createdAt: {
                type: DataType.DATE,
                defaultValue: sequelize.fn('now')

            }
        },
        {
            tableName: 'tokens',
            timestamps: false
        });

    return Tokens;
};
