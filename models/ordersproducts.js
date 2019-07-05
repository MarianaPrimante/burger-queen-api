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

// Criar Pedido
// {
//   "UserId":3,
//   "status":"cozinha",
//   "OrdersProducts":[{"ProductId":1}, {"ProductId":4}]
// }