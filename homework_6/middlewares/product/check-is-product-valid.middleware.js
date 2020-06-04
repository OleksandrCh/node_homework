module.exports = (req, res, next) => {
    const {name,price} = req.body;
    try{
        if (!name || !price) throw new Error('Some wrong!');
        if (price < 0) throw new Error('Some wrong!');
        next();
    } catch (e) {
        res.render({message: e.message})
    }
};
