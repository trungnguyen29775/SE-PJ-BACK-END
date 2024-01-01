const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const order = sequelize.define(
        'orders',
        {
            order_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            shippingAddress: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            paymentMethod: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            shippingPrice: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            totalPrice: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            isPaid: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            isDelivered: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            isShipped: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            deliveryDate: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        },
    );
    return order;
};
