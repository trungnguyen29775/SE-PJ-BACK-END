const db = require('../models');
const Order = db.order;
var fs = require('fs');
exports.create = async (req, res) => {
    try {
        const newOrder = {
            user_id: req.body.userId,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            shippingPrice: req.body.shippingAddress,
            totalPrice: req.body.totalPrice,
            isPaid: req.body.isPaid,
            isDelivered: req.body.isDelivered,
            isShipped: req.body.isShipped,
            deliveryDate: req.body.deliveryDate,
        };
        const lastestOrder = await Order.create(newOrder);
        res.status(200).send(lastestOrder);
    } catch (err) {
        res.status(500).send(`Error due to ${err}`);
    }
};

exports.view = async (req, res) => {
    try {
        const orders = await Order.findAll({
            where: {
                user_id: req.body.user_id,
            },
        });
        res.json(orders);
    } catch (err) {
        res.send(500)('Error due to', err);
    }
};

exports.destroy = async (req, res) => {
    const order_id = req.body.order_id;
    try {
        const order = await Order.findOne({ where: { order_id: order_id } });
        if (!order) {
            res.send('The order does not exist.');
        } else {
            Order.destroy({ where: { order_id: order.order_id } });
        }
        res.send(200)('Delete Order succeed');
    } catch (err) {
        res.send(500)('Error due to', err);
    }
};
