const db = require('../models');
const Address = db.address;

exports.viewAddress = async (req, res) => {
    try {
        const address = await Address.findAll({ where: { userId: req.body.userId } });
        res.json(address);
        console.log(address);
    } catch (err) {
        res.send(`Error ${err}`);
    }
};

exports.addAddress = async (req, res) => {
    try {
        const newAddress = {
            name: req.body.name,
            address: req.body.address,
            pinCode: req.body.pinCode,
            town: req.body.town,
            city: req.body.city,
            userId: req.body.userId,
            state: req.body.state,
        };
        await Address.create(newAddress);

        res.send(200)('Success');
    } catch (err) {
        res.status(401).send(`Error due to ${err}`);
    }
};

exports.removeAddress = async (req, res) => {
    try {
        await Address.destroy({ where: { address_id: req.body.address_id } });
    } catch (err) {
        res.send(err);
    }
};
