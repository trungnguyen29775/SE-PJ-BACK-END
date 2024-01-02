module.exports = (app) => {
    const productService = require('../service/product.service');
    var router = require('express').Router();
    router.get('/view-product', productService.view);
    router.post('/add-product', productService.create);
    router.post('/delete-product', productService.delete);
    router.post('/search-product', productService.search);
    app.use('/', router);
};
