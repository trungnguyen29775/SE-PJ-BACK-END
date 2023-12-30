const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const favorite = sequelize.define(
        'favorite',
        {
            favorite_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
        },
        {
            timestamps: false,
        },
    );
    return favorite;
};
