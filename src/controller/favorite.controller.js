module.exports = (app) => {
    const favoriteService = require('../service/favorite.service');
    var router = require('express').Router();

    router.post('/add-favorite', favoriteService.addFavorite);
    router.post('/view-favorite', favoriteService.viewFavorite);
    router.post('/delete-favorite', favoriteService.removeFavorite);

    app.use('/', router);
};
