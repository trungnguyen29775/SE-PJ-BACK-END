module.exports = (app) => {
    const orderListService = require('../service/order_list.service');
    var router = require('express').Router();
    router.post('/create-order-list', orderListService.addProduct);
    app.use('/', router);
};
