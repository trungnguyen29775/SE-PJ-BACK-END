module.exports = (app) => {
    const addressService = require('../service/address.service');
    var router = require('express').Router();

    router.post('/add-address', addressService.addAddress);
    router.post('/view-address', addressService.viewAddress);
    router.post('/delete-address', addressService.removeAddress);

    app.use('/', router);
};
