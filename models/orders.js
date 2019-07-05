module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Orders.associate = function (models) {
    Orders.belongsTo(models.Users, {
      foreingKey: 'UserId'
    });
    Orders.hasMany(models.OrdersProducts, {
      foreignKey: 'OrderId'
    })
  };
  return Orders;
};
