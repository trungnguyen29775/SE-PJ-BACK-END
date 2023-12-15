
module.exports = app =>
{
    const userService = require('../service/user.service')
    var router = require('express').Router();
    

    app.use('/',router);
}

