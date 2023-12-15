const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const address = sequelize.define(
        'addresses',
        {
            address_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            address: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            pinCode: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            town: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            userId: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            state: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        },
    );
    return address;
};
