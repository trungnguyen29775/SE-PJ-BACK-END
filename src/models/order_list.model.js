const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const order_list = sequelize.define(
        'order_lists',
        {
            order_list_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        },
    );
    return order_list;
};
