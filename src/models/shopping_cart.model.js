const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  const shopping_cart = sequelize.define("shopping_cart", {
    shopping_cart_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  {
    timestamps: false
  });
  return shopping_cart;
};