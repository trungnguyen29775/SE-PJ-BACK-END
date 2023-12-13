const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  const order_list = sequelize.define("order_list", {
    order_list_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  {
    timestamps: false
  });
  return users;
};