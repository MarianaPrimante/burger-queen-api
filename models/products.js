'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.NUMBER
  }, {});
  Products.associate = function (models) {
    Products.hasMany(models.OrdersProducts, {
      foreignKey: "ProductId"
    })
  };
  return Products;
};
