const {Router} = require('express');

const authRouter = Router();

const {authController} = require('../../controllers');
const {checkAccessToken,checkRefreshToken} = require('../../middlewares');

authRouter.post('/', authController.loginUser);
authRouter.post('/logout', checkAccessToken, authController.logOutUser);
authRouter.post('/refresh', checkRefreshToken, authController.refreshToken);


module.exports = authRouter;
