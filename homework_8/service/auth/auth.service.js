const db = require('../../dataBase').getInstance();
const {modelName: {TOKEN}} = require('../../constants');

module.exports = {
    getTokenByParams: (params) => {
        const TokenModel = db.getModel(TOKEN);

        return TokenModel.findOne({where: params})
    },
    createToken: (token) => {
        const TokenModel = db.getModel(TOKEN);

        return TokenModel.create(token)
    },
    updateToken: ({name, id, price}) => {
        const TokenModel = db.getModel(TOKEN);

        return TokenModel.update({name, price}, {where: {id}})
    },
    deleteTokenByParams: (params) => {
        const TokenModel = db.getModel(TOKEN);

        return TokenModel.destroy({where: params})
    }
};
