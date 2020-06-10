const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    port: 387,
    auth: {
        user: process.env.MAIL_SEND,
        pass: process.env.PASSWORD_EMAIL
    }
})
