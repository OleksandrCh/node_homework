module.exports = (sequelize, DataType) => {
    const Users = sequelize.define('Users', {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            email: {
                type: DataType.STRING,
                unique: true,
                allowNull: false
            },
            name: {
                type: DataType.STRING,
                allowNull: false
            },
            password: {
                type: DataType.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'users',
            timestamps: false
        });

    return Users;
};
