const jwt = require('jsonwebtoken');

const {JWT_ACCESS, JWT_REFRESH, JWT_ACCESS_TIME, JWT_REFRESH_TIME} = require('../constants/tokenPass');


module.exports = () => {
    const accessToken = jwt.sign({}, JWT_ACCESS, {expiresIn: JWT_ACCESS_TIME});
    const refreshToken = jwt.sign({}, JWT_REFRESH, {expiresIn: JWT_REFRESH_TIME});

    return {
        accessToken,
        refreshToken
    }

};
