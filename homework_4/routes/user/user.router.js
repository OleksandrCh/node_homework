const {Router} = require('express');

const userRouter = Router();

const {userController} = require('../../controllers');
const checkUserValidity = require('../../middlewares/user/check-is-user-valid.middleware')


userRouter.post('/', userController.createUser);
    // checkUserValidity,

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getOnceUsersOfId);
userRouter.put('/', userController.updateUser);
userRouter.delete('/:id', userController.deleteUserOfId);


module.exports = userRouter;
