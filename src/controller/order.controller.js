module.exports = (app) => {
    const orderService = require('../service/order.service');
    var router = require('express').Router();
    router.post('/create-order', orderService.create);
    router.post('/view-order', orderService.view);
    app.use('/', router);
};
