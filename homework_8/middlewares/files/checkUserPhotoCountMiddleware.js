const errorHandler = require('../../error/errorHandler');
const {statusCode:{BAD_REQUEST}} = require('../../constants');

module.exports = (req,res,next) => {
    if (req.photos.length > 1){
        return next(new errorHandler('You can\'t upload photo to user',BAD_REQUEST))
    }
    if (req.docs.length > 1){
        return next(new errorHandler('You can\'t upload doc to user',BAD_REQUEST))
    }
    next()
};
