const {emailService, userService, productService} = require('../service');
const {emailActionEnum} = require('../constants');

module.exports = async () => {
    const users = await userService.getUsers();

    for (let user of users) {
        const {dataValues: {avatar, email, name}} = user;

        if (!avatar){
            await emailService.sendMail(email, emailActionEnum.USER_DONT_HAVE_AVATAR, {userName: name})
        }

    }

};
