const db = require('../models');
const Favorite = db.favorite;
const Products = db.products;

exports.viewFavorite = async (req, res) => {
    try {
        const favorite = await Favorite.findAll({ where: { user_id: req.body.userId } });
        const responseProducts = [];
        for (let i = 0; i < favorite.length; i++) {
            const product = await Products.findOne({ where: { product_id: favorite[i].product_id } });
            responseProducts.push(product);
        }
        res.send(responseProducts);
    } catch (err) {
        res.send(`Error ${err}`);
    }
};

exports.addFavorite = async (req, res) => {
    try {
        const newFavorite = {
            user_id: req.body.userId,
            product_id: req.body.productId,
        };
        await Favorite.create(newFavorite);

        res.status(200).send('Success');
    } catch (err) {
        res.status(401).send(`Error due to ${err}`);
    }
};

exports.removeFavorite = async (req, res) => {
    try {
        await Favorite.destroy({ where: { user_id: req.body.userId, product_id: req.body.productId } });
        res.send('deleted!');
    } catch (err) {
        res.send(err);
    }
};
