const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    port: 387,
    auth: {
        user: process.env.MAIL_SEND,
        pass: process.env.PASSWORD_EMAIL
    }
});

module.exports = (mail) => {
    const mailOptions = {
        from: 'Some else',
        to: mail,
        subject: 'Hello user',
        html: '<h1> TEST </h1>'
    }

    return transporter.sendMail(mailOptions)
};
