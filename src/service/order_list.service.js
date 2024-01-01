const db = require('../models');
const List = db.order_list;
var fs = require('fs');

exports.viewList = async (req, res) => {
    try {
        const list = await List.findAll({ where: { order_id: req.body.order_id } });
        res.json(list);
    } catch (err) {
        res.send('Error');
    }
};

exports.addProduct = async (req, res) => {
    try {
        await List.create({
            product_id: req.body.product_id,
            order_id: req.body.order_id,
            quantity: req.body.quantity,
        });
        res.status(200).send('Add product succeed!');
    } catch (err) {
        res.status(500).send(`Error due to ${err}`);
    }
};

exports.removeProduct = async (req, res) => {
    try {
        await List.destroy({ where: { order_list_id: req.body.order_list_id } });
    } catch (err) {
        res.send('Error due to ', err);
    }
};
