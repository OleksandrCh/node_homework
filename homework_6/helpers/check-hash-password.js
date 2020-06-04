const bcrypt = require('bcrypt');

module.exports = async (hashPassword, password) => {
    const isPasswordEquals = await bcrypt.compare(password, hashPassword);
    if (!isPasswordEquals){
        throw new Error('User is not valid')
    }
};
