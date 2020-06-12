const {Router} = require('express');

const userRouter = Router();

const {userController} = require('../../controllers');
const {checkUserValidity, checkUserPhotoCountMiddleware,checkIsBaseHaveUser,checkAccessToken, checkerFile} = require('../../middlewares');

userRouter.post('/', checkUserValidity, checkerFile, checkUserPhotoCountMiddleware, userController.createUser);
userRouter.get('/', userController.getAllUsers);
userRouter.get('/:userId', checkIsBaseHaveUser, userController.getOnceUsersOfId);
userRouter.put('/:userId', checkAccessToken, checkIsBaseHaveUser, checkerFile,checkUserPhotoCountMiddleware, checkUserValidity, userController.updateUser);
userRouter.delete('/:userId', checkAccessToken, checkIsBaseHaveUser, userController.deleteUserOfId);

module.exports = userRouter;
