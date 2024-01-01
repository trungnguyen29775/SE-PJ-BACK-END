module.exports = (app) => {
    const productsService = require('../service/product.service');
    var router = require('express').Router();
    router.post('/view-products', productService.view);
    router.post('/add-products', productService.create);
    app.use('/', router);
};
