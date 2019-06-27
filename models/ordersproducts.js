module.exports = (sequelize, DataTypes) => {
  const OrdersProducts = sequelize.define('OrdersProducts', {
    orderId: DataTypes.STRING,
    productId: DataTypes.STRING
  }, {});
  OrdersProducts.associate = function (models) {
    OrdersProducts.belongsTo(models.Products, {
      foreingKey: 'productId'
    })
    OrdersProducts.belongsTo(models.Orders, {
      foreingKey: 'orderId'
    })
  };
  return OrdersProducts;
};