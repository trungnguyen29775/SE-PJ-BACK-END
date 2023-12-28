const db = require('../models');
const Address = db.address;

exports.viewAddress = async (req, res) => {
    try {
        const address = await Address.findAll({ where: { user_id: req.body.userId } });
        res.json(address);
        console.log(address);
    } catch (err) {
        res.send(`Error ${err}`);
    }
};

exports.addAddress = async (req, res) => {
    try {
        const newAddress = {
            user_id: req.body.userId,
            name: req.body.name,
            address: req.body.address,
            pinCode: req.body.pinCode,
            town: req.body.town,
            city: req.body.city,
            userId: req.body.userId,
            state: req.body.state,
        };
        await Address.create(newAddress);

        res.status(200).send('Success');
    } catch (err) {
        res.status(401).send(`Error due to ${err}`);
    }
};

exports.removeAddress = async (req, res) => {
    try {
        await Address.destroy({ where: { address_id: req.body.addressId, user_id: req.body.userId } });
        res.send('deleted!');
    } catch (err) {
        res.send(err);
    }
};
