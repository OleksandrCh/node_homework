const {userService} = require('../../service');
const {hashPassword, checkHashPassword} = require('../../helpers');
const ErrorHandler = require('../../error/errorHandler');

module.exports = {
    getAllUsers: async (req, res) => {
        let users = await userService.getUsers();
        res.json({users})
    },

    getOnceUsersOfId: async (req, res) => {
       const  user = req.user;
        res.json({user});
    },

    updateUser: async (req, res) => {
        const change = req.body;
        const {userId} = req.params;

        try {
            await userService.updateUserOfId(change, userId);
        } catch (e) {
            res.json(e)
        }

        res.end()
    },

    deleteUserOfId: async (req, res) => {
        const {id} = req.params;
        try {
            const product = await userService.deleteUsersOfId(id);

            res.json({product})
        } catch (e) {
            res.json(e)
        }
    },

    createUser: async (req, res) => {
        try {
            const password = await hashPassword(req.body.password);
            req.body.password = password;

            await userService.createUser(req.body);
            res.json('Пользователь создан');
        } catch (e) {
            res.json(e)
        }

    }
};
