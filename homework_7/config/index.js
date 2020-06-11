module.exports = {
    PORT: 4444,

    JWT_ACCESS: process.env.JWT_ACCESS,
    JWT_REFRESH: process.env.JWT_REFRESH,
    JWT_ACCESS_TIME: process.env.JWT_ACCESS_TIME,
    JWT_REFRESH_TIME: process.env.JWT_REFRESH_TIME,

    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,

    ROOT_MAIL: process.env.ROOT_MAIL,
    ROOT_MAIL_PASS: process.env.ROOT_MAIL_PASS,
    ROOT_MAIL_SERVICE: process.env.ROOT_MAIL_SERVICE,

    FRONTEND_URL: process.env.FRONDEND_URL || 'localhost:4444',
};
