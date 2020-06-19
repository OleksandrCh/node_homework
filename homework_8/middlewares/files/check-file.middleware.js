const {filesCheckOptionsEnum,statusCode} = require('../../constants');
const {errorHandler} = require('../../error/errorHandler');

module.exports = (req, res, next) => {
    req.photos = [];
    req.docs = [];

    if (!req.files) return next();

    const files = Object.values(req.files);

    for (const file of files) {
        const {size, mimetype, name} = file;

        if (filesCheckOptionsEnum.PHOTO_MIMETYPES.includes(mimetype)) {
            if (size > filesCheckOptionsEnum.MAX_PHOTO_SIZE) {
                return next(new errorHandler(`Max file size is ${filesCheckOptionsEnum.MAX_PHOTO_SIZE}`, statusCode.NOT_FOUND))
            }
            req.photos.push(file);
        } else if (filesCheckOptionsEnum.DOC_MIMETYPES.includes(mimetype)) {
            if (size > filesCheckOptionsEnum.MAX_DOC_SIZE) {
                return next(new errorHandler(`Max file size is ${filesCheckOptionsEnum.MAX_DOC_SIZE}`, statusCode.NOT_FOUND))
            }
            req.docs.push(file);
        } else {
            return next(new errorHandler(`File ${name} is not valid`, 400))
        }
    }
    next()
};
