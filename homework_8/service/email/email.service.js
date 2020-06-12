const nodeMailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');

const {ROOT_MAIL, ROOT_MAIL_PASS, ROOT_MAIL_SERVICE, FRONTEND_URL} = require('../../config');
const htmlTemplates = require('../../emailTemplates');

const transporter = nodeMailer.createTransport({
    service: ROOT_MAIL_SERVICE,
    port: 387,
    auth: {
        user: ROOT_MAIL,
        pass: ROOT_MAIL_PASS
    }
});

const emailTemplates = new EmailTemplates({
    message: null,
    views: {
        root: path.resolve(process.cwd(), 'emailTemplates')
    }
});

class EmailService {
    async sendMail(userMail, action, context) {
        try {
            const templateInfo = htmlTemplates[action];
            const html = await emailTemplates.render(templateInfo.templateFileName, {
                ...context,
                frontendUrl: FRONTEND_URL,
                messageText: templateInfo.text
            });

            const mailOptions = {
                from: ROOT_MAIL,
                to: userMail,
                subject: templateInfo.subject,
                html
            };
            return transporter.sendMail(mailOptions)
        } catch (e) {
            console.log(e);
        }


    }
}

module.exports = new EmailService();
