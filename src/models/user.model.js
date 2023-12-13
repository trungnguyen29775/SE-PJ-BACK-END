const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define("user", {
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    password:{
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: Sequelize.STRING,
      allowNull:false
    },
    name: {
      type: Sequelize.STRING,
      allowNull:false
    },
    isAdmin: {
      type: Sequelize.STRING,
      allowNull:false
    },
    
  },
  {
    timestamps: false
  });
  return users;
};