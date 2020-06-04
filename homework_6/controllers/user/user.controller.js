const {userService} = require('../../service');
const {hashPassword, checkHashPassword} = require('../../helpers');
const ErrorHandler = require('../../error/errorHandler');

module.exports = {
    getAllUsers: async (req, res) => {
        let users = await userService.getUsers();
        res.json({users})
    },

    getOnceUsersOfId: async (req, res) => {
        const {id} = req.params;

        const product = await userService.getUsersOfId(id);
        res.json({product});
    },

    updateUser: async (req, res) => {
        const change = req.body;

        try {
            await userService.updateUserOfId(change);
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
        } catch (e) {
            res.json(e)
        }

        res.json('User has been created')
    },

    loginUser: async (req, res, next) => {
        try {
            const {password, email} = req.body;
            const user = await userService.getUsersOfParams(email);

            if (!user) {
                return next(new ErrorHandler('user is not found', 404, 4001));
            }
            await checkHashPassword(user.password, password);

            res.json(user)
        } catch (e) {
            res.json(e)
        }
    }
};
