const {Router} = require('express');

const userRouter = Router();

const {userController} = require('../../controllers');
const {checkUserValidity,checkIsBaseHaveUser} = require('../../middlewares');


userRouter.post('/', checkUserValidity, userController.createUser);
userRouter.get('/', userController.getAllUsers);
userRouter.get('/:userId', checkIsBaseHaveUser, userController.getOnceUsersOfId);
userRouter.put('/:userId', checkIsBaseHaveUser, checkUserValidity, userController.updateUser);
userRouter.delete('/:userId', checkIsBaseHaveUser, userController.deleteUserOfId);

module.exports = userRouter;
