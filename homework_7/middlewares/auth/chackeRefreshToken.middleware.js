const jwt = require('jsonwebtoken');

const {
    requestHeader: {AUTHORIZATION},
    customError: {NOT_VALID, NOT_VALID_TOKEN},
    statusCode: {BAD_REQUEST, UNAUTHORIZED},
    tokenPass: {JWT_REFRESH}
} = require('../../constants');
const errorHandler = require('../../error/errorHandler');
const {authService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const authorizationToken = req.get(AUTHORIZATION);

        if (!authorizationToken) next(new errorHandler(NOT_VALID.message, BAD_REQUEST, NOT_VALID.customCode));

        jwt.verify(authorizationToken, JWT_REFRESH, err => {
            if (err) next(new errorHandler(NOT_VALID_TOKEN.message, UNAUTHORIZED, NOT_VALID_TOKEN.customCode))
        });

        const tokenFromDB = await authService.getTokenByParams({refreshToken: authorizationToken});
        if (!tokenFromDB) next(new errorHandler(NOT_VALID_TOKEN.message, UNAUTHORIZED, NOT_VALID_TOKEN.customCode));

        req.userId = tokenFromDB.userId;

        next()
    } catch (e) {
        next(e);
    }
};

