module.exports = (app) => {
    const userService = require('../service/user.service');
    var router = require('express').Router();

    router.post('/sign-in', userService.login);
    router.post('/sign-up', userService.signup);
    app.use('/', router);
};
