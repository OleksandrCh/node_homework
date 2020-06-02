const {Router} = require('express');

const userRouter = Router();

const {userController} = require('../../controllers');
const checkUserValidity = require('../../middlewares/user/check-is-user-valid.middleware')


userRouter.post('/', checkUserValidity, userController.createUser);
    // checkUserValidity,

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getOnceUsersOfId);
userRouter.put('/', userController.updateUser);
userRouter.delete('/:id', userController.deleteUserOfId);
userRouter.post('/auth', userController.loginUser);


module.exports = userRouter;
