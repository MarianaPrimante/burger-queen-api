module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    uid: DataTypes.STRING
  }, {});
  Orders.associate = function (models) {
    Orders.belongsTo(models.User, {
      foreingKey: 'uid'
    });
    Orders.hasMany(models.OrdersProducts, {
      foreignKey: 'orderId'
    })
  };
  return Orders;
};