const db = require('../../dataBase').getInstance();


module.exports = {
    getUsers: () => {
        const UserModel = db.getModel('Users');
        return UserModel.findAll({});
    },
    createUser: ({name, email, password, age}) => {
        console.log(name, email, password);

        const UserModel = db.getModel('Users');
        UserModel.create({name, email, password, age});
    },
    getUsersOfId(id) {
        const UserModel = db.getModel('Users');

        return UserModel.findOne({where: {id: id}})
    },
    deleteUsersOfId(id) {
        const UserModel = db.getModel('Users');

        return UserModel.destroy({where: {id: id}})
    },
    updateUserOfId({name, email, id}) {
        const UserModel = db.getModel('Users');

        return UserModel.update({name, email}, {where: {id: id}})
    }
};
