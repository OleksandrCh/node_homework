const uuid = require('uuid').v1();
const fsExtra = require('fs-extra').promises;
const path = require('path');

const {emailActionEnum, statusCode: {OK, CREATED}, requestHeader: {AUTHORIZATION}} = require('../../constants');
const {hashPassword} = require('../../helpers');
const {userService, emailService, authService} = require('../../service');

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

            await emailService.sendMail(user.email, emailActionEnum.USER_UPDATE, {userName: user.name});

            res.json(OK);
        } catch (e) {
            next(e)
        }
    },

    deleteUserOfId: async (req, res, next) => {
        try {
            const {userId} = req.params;
            const token = req.get(AUTHORIZATION);
            const user = req.user;

            await authService.deleteTokenByParams({accessToken: token});
            await userService.deleteUsersOfId(userId);

            await emailService.sendMail(user.email, emailActionEnum.USER_DELETE, {userName: user.name});

            res.sendStatus(OK);
        } catch (e) {
            next(e)
        }
    },

    createUser: async (req, res, next) => {
        try {
            const user = req.body;
            const [avatar] = req.photos;
            const [docs] = req.docs;
            const fileExtension = avatar.name.split('.').pop();

            user.password = await hashPassword(user.password);

            const {id} = await userService.createUser(user);

            const photosDir = `users/${id}/photos`;
            const photoName = `${uuid}.${fileExtension}`;

            await fsExtra.mkdir(path.resolve(process.cwd(), 'public', photosDir), {recursive: true});

            await avatar.mv(path.resolve(process.cwd(), 'public', photosDir, photoName));

            await userService.updateUserOfId({avatar: `${photosDir}/${photoName}`},id);
            await emailService.sendMail(user.email, emailActionEnum.USER_REGISTER, {userName: user.name});
            res.sendStatus(CREATED)
        } catch (e) {
            next(e)
        }

    }
};
