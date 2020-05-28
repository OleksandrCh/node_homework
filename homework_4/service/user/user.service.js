const db = require('../../dataBase').getInstance();


module.exports = {
    getUsers: () => {
        const UserModel = db.getModel('Users');
        return UserModel.findAll({});
    },
    createUsers: (user) => {
        const UserModel = db.getModel('Users');
        UserModel.create(user);
    }
};
