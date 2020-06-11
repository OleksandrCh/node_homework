const {emailActionEnum} = require('../constants');

module.exports = {
    [emailActionEnum.USER_REGISTER]: {
        subject: 'Welcome!',
        text: 'Glad you registered on the site.',
        templateFileName: 'mainBlock'
    },
    [emailActionEnum.USER_DELETE]: {
        subject: 'You deletes self!',
        text: 'You have deleted your account.',
        templateFileName: 'mainBlock'
    },
    [emailActionEnum.USER_UPDATE]: {
        subject: 'You updates self!',
        text: 'You have update your account',
        templateFileName: 'mainBlock'
    }
};
