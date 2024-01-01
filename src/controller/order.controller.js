module.exports = (app) => {
    const orderService = require('../service/order.service');
    var router = require('express').Router();
    router.post('/create-order', orderService.create);
    app.use('/', router);
};
