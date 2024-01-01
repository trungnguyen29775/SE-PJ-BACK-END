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
                type: DataTypes.STRING,
                allowNull: false,
            },
            paymentMethod: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            shippingPrice: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            totalPrice: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            isPaid: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            isDelivered: {
                type: DataTypes.BOOLEAN,
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
