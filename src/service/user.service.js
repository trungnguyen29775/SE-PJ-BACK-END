const db = require('../models');
const User = db.user;

exports.login = async (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
    };
    const checkName = await User.findOne({ where: { email: user.email } });
    if (checkName) {
        if (user.password === checkName.password) {
            res.status(200).send('Authoried');
        }
    } else {
        res.send(500)("User name doesn't exist.");
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

        const responseData = {
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
        };
        res.status(200).send(responseData);

        // console.log(newUser);
        // const checkName = await User.findOne({ where: { email: newUser.email } });
        // if (checkName) {
        //     res.send('The email already exist.');
        // } else {
        //     await User.create(newUser);
        //     const responseData = {
        //         name: newUser.name,
        //         email: newUser.email,
        //         isAdmin: newUser.isAdmin,
        //     };
        //     res.send(responseData);
        // }
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
