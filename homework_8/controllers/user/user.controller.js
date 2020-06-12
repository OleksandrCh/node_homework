const {emailActionEnum, statusCode: {OK,CREATED},requestHeader:{AUTHORIZATION}} = require('../../constants');
const {hashPassword} = require('../../helpers');
const {userService, emailService,authService} = require('../../service');

module.exports = {
    getAllUsers: async (req, res) => {
        let users = await userService.getUsers();

        res.json({users})
    },

    getOnceUsersOfId: async (req, res) => {
        const user = req.user;

        res.json({user});
    },

    updateUser: async (req, res, next) => {
        try {
            const change = req.body;
            const {userId} = req.params;

            await userService.updateUserOfId(change, userId);

            const user = await userService.getUsersOfId(userId);

            await emailService.sendMail(user.email,emailActionEnum.USER_UPDATE, {userName: user.name});

            res.json(OK);
        } catch (e) {
            next(e)
        }
    },

    deleteUserOfId: async (req, res, next) => {
        try {
            const {id} = req.params;
            const token = req.get(AUTHORIZATION);
            const user = await userService.getUsersOfId(id);

            await userService.deleteUsersOfId(id);
            await authService.deleteTokenByParams({accessToken: token});

            await emailService.sendMail(user.email,emailActionEnum.USER_UPDATE, {userName: user.name});

            res.sendStatus(OK).json("Пользователь удалился")
        } catch (e) {
            next(e)
        }
    },

    createUser: async (req, res, next) => {
        try {
            const user = req.body;

            user.password = await hashPassword(user.password);

            await userService.createUser(user);
            await emailService.sendMail(user.email, emailActionEnum.USER_REGISTER, {userName: user.name});
            res.sendStatus(CREATED).json('Пользователь создан');
        } catch (e) {
            next(e)
        }

    }
};
