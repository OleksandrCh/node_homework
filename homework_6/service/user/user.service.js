const db = require('../../dataBase').getInstance();
const {modelName: {USER}} = require('../../constants');


module.exports = {
    getUsers: () => {
        const UserModel = db.getModel(USER);
        return UserModel.findAll({});
    },
    createUser: (user) => {
        const UserModel = db.getModel(USER);
        UserModel.create(user);
    },
    getUsersOfId(id) {
        const UserModel = db.getModel(USER);

        return UserModel.findOne({where: {id}})
    },
    getUsersOfParams(email) {
        const UserModel = db.getModel(USER);

        return UserModel.findOne({where: {email}})
    },
    deleteUsersOfId(id) {
        const UserModel = db.getModel(USER);

        return UserModel.destroy({where: {id}})
    },
    updateUserOfId({name, email, id}) {
        const UserModel = db.getModel(USER);

        return UserModel.update({name, email}, {where: {id}})
    }
};
