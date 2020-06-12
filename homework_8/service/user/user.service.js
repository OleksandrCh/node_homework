const db = require('../../dataBase').getInstance();

const {modelName: {USER}} = require('../../constants');

module.exports = {
    getUsers: () => {
        const UserModel = db.getModel(USER);

        return UserModel.findAll({});
    },
    createUser: (user) => {
        const UserModel = db.getModel(USER);

        return UserModel.create(user);
    },
    getUsersOfId(userId) {
        const UserModel = db.getModel(USER);

        return UserModel.findByPk(userId)
    },
    getUsersOfParams(email) {
        const UserModel = db.getModel(USER);

        return UserModel.findOne({where: {email}})
    },
    deleteUsersOfId(id) {
        const UserModel = db.getModel(USER);

        return UserModel.destroy({where: {id}})
    },
    updateUserOfId(change, userId) {
        const UserModel = db.getModel(USER);

        return UserModel.update(change, {where: {id: userId}})
    }
};
