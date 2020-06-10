const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    port: 387,
    auth: {
        user: 'testmailnode.skjdfhlsdjhf@gmail.com',
        password: 'ljdshsdjhndsjhnv23453243#'
    }
})
