'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrdersProducts = sequelize.define('OrdersProducts', {
    OrderId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {});
  OrdersProducts.associate = function (models) {
    OrdersProducts.belongsTo(models.Products, {
      foreingKey: 'ProductId'
    })
    OrdersProducts.belongsTo(models.Orders, {
      foreingKey: 'OrderId'
    })
  };
  return OrdersProducts;
};