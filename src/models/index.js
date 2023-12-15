const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.address = require('./address.model')(sequelize, Sequelize);
db.order_list = require('./order_list.model')(sequelize, Sequelize);
db.order = require('./order.model')(sequelize, Sequelize);
db.products = require('./products.model')(sequelize, Sequelize);
db.shopping_cart = require('./shopping_cart.model')(sequelize, Sequelize);
db.user = require('./user.model')(sequelize, Sequelize);

// -------------------------Relation------------------------

// Order List Relation
db.order_list.belongsTo(db.order, {
    foreignKey: 'order_id',
});
db.order.hasMany(db.order_list, {
    foreignKey: 'order_id',
});

// Order Relation
db.user.hasMany(db.order, {
    foreignKey: 'user_id',
});
db.order.belongsTo(db.user, {
    foreignKey: 'user_id',
});

// Address Relation
db.address.belongsTo(db.user, {
    foreignKey: 'user_id',
});
db.user.hasMany(db.address, {
    foreignKey: 'user_id',
});
//   Product
db.order_list.belongsTo(db.products, {
    foreignKey: 'product_id',
});
db.products.hasMany(db.order_list, {
    foreignKey: 'product_id',
});

// shopping cart Realation
db.shopping_cart.belongsTo(db.user, {
    foreignKey: 'user_id',
});
db.user.hasMany(db.shopping_cart, {
    foreignKey: 'user_id',
});

module.exports = db;
