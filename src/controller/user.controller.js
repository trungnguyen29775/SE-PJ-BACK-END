module.exports = (app) => {
    const userService = require('../service/user.service');
    const addressService = require('../service/address.service');
    var router = require('express').Router();

    router.post('/sign-in', userService.login);
    router.post('/sign-up', userService.signup);
    app.use('/', router);
};
