const {userService} = require('../../service');

module.exports = {
    getAllUsers: async (req, res) => {
        let users = await userService.getUsers();
        res.json({users})
    },

    updateUser: (req, res) => {

        res.end('PUT users')
    },

    deleteUser: (req, res) => {
        const params = req.params;
        const query = req.query;

        res.json({params, query});
    },

    createUser: async (req, res) => {
        try {
            await userService.createUsers(req.body);
        } catch (e) {
            res.json(e)
        }

        res.end()
    }
};
