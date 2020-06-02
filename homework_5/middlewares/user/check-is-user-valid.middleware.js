const errorHandler = require('../../error/errorHandler');

module.exports = (req, res, next) => {
    try {
        const {name, age, email, password} = req.body;

        if (!age || !name || !email || !password) {
            new errorHandler('User is not valid', 400, 4001)
        }

        if (age > 150 || age < 1) {
            new errorHandler('Age is not valid', 400, 4001)
        }

        if (password.length < 9) {
            new errorHandler('Weak password', 400, 40001)
        }

        next();

    } catch (e) {
        res.render('error', {message: e.message})
    }
}
