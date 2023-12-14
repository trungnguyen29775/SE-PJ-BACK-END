const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  const order = sequelize.define("order", {
    order_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    shippingAddress: {
    type: Sequelize.STRING,
    allowNull:false
    },
    paymentMethod: {
    type: Sequelize.STRING,
    allowNull:false
    },
    shippingPrice: {
    type: Sequelize.STRING,
    allowNull:false
    }, 
    totalPrice:{
      type: DataTypes.STRING,
      allowNull:false
    },
    isPaid: {
      type: Sequelize.STRING,
      allowNull:false
    },
    paidAt: {
      type: Sequelize.STRING,
      allowNull:false
    },
    isDelivered: {
      type: Sequelize.STRING,
      allowNull:false
    },
    isPlaced:{
        type: DataTypes.STRING,
        allowNull:false
    },
    isShipped:{
        type: DataTypes.STRING,
        allowNull:false
    },
    deliveryDate:{
        type: DataTypes.STRING,
        allowNull:false
    }, 
  },
  {
    timestamps: false
  });
  return users;
};