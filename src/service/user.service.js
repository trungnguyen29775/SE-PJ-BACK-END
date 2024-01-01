const db = require('../models');
const User = db.user;
const Favorite = db.favorite;
const Products = db.products;

exports.login = async (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
    };
    const checkName = await User.findOne({ where: { email: user.email } });
    if (checkName) {
        if (user.password === checkName.password) {
            const favorite = await Favorite.findAll({ where: { user_id: checkName.user_id } });
            const responseProducts = [];
            for (let i = 0; i < favorite.length; i++) {
                const product = await Products.findOne({ where: { product_id: favorite[i].product_id } });
                responseProducts.push(product);
            }
            const responseData = {
                name: checkName.name,
                email: checkName.email,
                userId: checkName.user_id,
                isAdmin: checkName.isAdmin,
                phoneNum: checkName.phoneNum,
                favorite: responseProducts,
            };
            res.status(200).send(responseData);
        }
    } else {
        res.status(500).send("User name doesn't exist.");
    }
};

exports.signup = async (req, res) => {
    try {
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin: false,
        };

        const checkName = await User.findOne({ where: { email: newUser.email } });
        if (checkName) {
            res.send('The email already exist.');
        } else {
            await User.create(newUser);
            const responseData = {
                name: newUser.name,
                email: newUser.email,
                isAdmin: newUser.isAdmin,
            };
            res.send(responseData);
        }
    } catch (err) {
        res.status(500).send(`Error due to ${err}`);
    }
};

exports.updateInfo = async (req, res) => {
    try {
        await User.update(
            {
                email: req.body.email,
                phoneNum: req.body.phoneNum,
                name: req.body.name,
            },
            {
                where: {
                    user_id: req.body.user_id,
                },
            },
        );
        res.status(200).send('Succeed');
    } catch (err) {
        res.status(500).send(`Error due to ${err}`);
    }
};
exports.changePassword = async (req, res) => {
    try {
        await User.update(
            { password: req.body.password },
            {
                where: {
                    email: req.body.email,
                },
            },
        );
        res.send(200)('Updated!');
    } catch (err) {
        console.log('Error due to ', err);
    }
};
