module.exports = (app) => {
    const userService = require('../service/user.service');
    var router = require('express').Router();

    router.get('/login', userService.login);
    router.post('/signup', userService.signup);
    app.use('/', router);
};
