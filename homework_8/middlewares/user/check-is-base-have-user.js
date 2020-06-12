const errorHandler = require('../../error/errorHandler');
const {userService,emailService} = require('../../service');

module.exports = async (req, res, next) => {
    const {userId} = req.params;

    try {
        const user = await userService.getUsersOfId(userId);

        if (!user) return next(new errorHandler('Dont find user!', 404));
        req.user = user;

        next()
    } catch (e) {
        res.json({message: e.message})
    }
};
