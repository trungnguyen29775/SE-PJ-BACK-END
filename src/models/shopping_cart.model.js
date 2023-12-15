const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const shopping_cart = sequelize.define(
        'shopping_carts',
        {
            shopping_cart_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
        },
        {
            timestamps: false,
        },
    );
    return shopping_cart;
};
