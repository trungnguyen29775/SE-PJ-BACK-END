module.exports = (app) => {
    const productsService = require('../service/product.service');
    var router = require('express').Router();

    router.post('/view-products', productsService.view);
    router.post('/add-products', productsService.create);

    app.use('/', router);
};
