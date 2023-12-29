module.exports = (app) => {
    const productService = require('../service/product.service');
    var router = require('express').Router();

    router.post('/add-product', productService.create);
    app.use('/', router);
};
