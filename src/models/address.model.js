const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  const address = sequelize.define("address", {
    address_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull:false
    },
    address: {
        type: Sequelize.STRING,
        allowNull:false
    },
    pinCode: {
        type: Sequelize.STRING,
        allowNull:false
    }, 
    town:{
      type: DataTypes.STRING,
      allowNull:false
    },
    city: {
      type: Sequelize.STRING,
      allowNull:false
    },
    userId: {
      type: Sequelize.STRING,
      allowNull:false
    },
    state: {
      type: Sequelize.STRING,
      allowNull:false
    },
  },
  {
    timestamps: false
  });
  return users;
};