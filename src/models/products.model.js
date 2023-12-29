const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const products = sequelize.define(
        'products',
        {
            product_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            price: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            rating: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            countInStock: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        },
    );
    return products;
};
