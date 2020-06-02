const {userService} = require('../../service');
const {hashPassword} = require('../../helpers');

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
            console.log('-----------------------------')
            console.log(password);
            console.log('-----------------------------')
            await userService.createUser(req.body);
        } catch (e) {
            res.json(e)
        }

        res.end()
    }
};
