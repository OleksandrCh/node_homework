const cron = require('node-cron');
const SendMailWhenNotHavePhoto = require('./SendMailUserNotHaveAvatar');
module.exports = () =>{
    cron.schedule('10 14 */19 * *', async () =>{
        await SendMailWhenNotHavePhoto();
    });
};
