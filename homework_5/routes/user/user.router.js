const {Router} = require('express');

const userRouter = Router();

const {userController} = require('../../controllers');
const {checkUserValidity} = require('../../middlewares');


userRouter.post('/', checkUserValidity, userController.createUser);
    // checkUserValidity,

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getOnceUsersOfId);
userRouter.put('/', userController.updateUser);
userRouter.delete('/:id', userController.deleteUserOfId);
userRouter.post('/auth', userController.loginUser);


module.exports = userRouter;
