const Joi = require('joi');

const {
    requestHeader: {AUTHORIZATION},
    statusCode: {BAD_REQUEST, NOT_FOUND: NOT_FOUND_CODE, OK},
    customError: {NOT_VALID, NOT_FOUND}
} = require('../../constants');

const errorHandler = require('../../error/errorHandler');
const {checkHashPassword, tokeniser} = require('../../helpers');
const {userService, authService} = require('../../service');
const {updateUserValidator} = require('../../validators');

module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const {password, email} = req.body;

            const {error} = Joi.validate({password, email}, updateUserValidator);
            if (error) return next(new errorHandler(error.details[0].message, BAD_REQUEST, NOT_VALID.customCode));

            const user = await userService.getUsersOfParams(email);
            if (!user) return next(new errorHandler(error.details[0].message, NOT_FOUND_CODE, NOT_FOUND.customCode));

            await checkHashPassword(user.password, password);

            const tokens = tokeniser();

            await authService.createToken({...tokens, userId: user.id});

            res.json(tokens)
        } catch (e) {
            next(e)
        }
    },

    logOutUser: async (req, res, next) => {
        try {
            const accessToken = req.get(AUTHORIZATION);

            await authService.deleteTokenByParams({accessToken});

            res.sendStatus(OK)
        } catch (e) {
            next(e)
        }
    },

    refreshToken: async (req, res, next) => {
        try {
            const refreshToken = req.get(AUTHORIZATION);
            const userId = req.userId;

            const user = await userService.getUsersOfId(userId);
            if (!user) return next(new errorHandler(NOT_FOUND.message, NOT_FOUND_CODE, NOT_FOUND.customCode));

            const token = tokeniser();

            await authService.deleteTokenByParams({refreshToken});
            await authService.createToken({...token, userId});

            res.json(token)
        } catch (e) {
            next(e)
        }
    }
};
