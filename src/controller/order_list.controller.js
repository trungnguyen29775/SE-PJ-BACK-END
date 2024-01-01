module.exports = (app) => {
    const orderListService = require('../service/order_list.service');
    var router = require('express').Router();
    router.post('/create-order-list', orderListService.addProduct);
    router.post('/view-order-list', orderListService.viewList);
    app.use('/', router);
};
