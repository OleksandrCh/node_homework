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
    },
    [emailActionEnum.PRODUCT_CREATE]: {
        subject: 'You makes product',
        text: 'HELLO, you create new product',
        templateFileName: 'mainBlock'
    },
    [emailActionEnum.PRODUCT_UPDATE]: {
        subject: 'You update product',
        text: 'You update your product',
        templateFileName: 'mainBlock'
    },
    [emailActionEnum.PRODUCT_DELETE]: {
        subject: 'You delete product',
        text: 'You delete your product',
        templateFileName: 'mainBlock'
    },
    [emailActionEnum.PRODUCT_NOT_HAVE_PHOTO]: {
        subject: 'Do you have photo?',
        text: 'Download photo in your account',
        templateFileName: 'mainBlock'
    }
};
