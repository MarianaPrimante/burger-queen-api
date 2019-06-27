module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Orders, {
      foreignKey: "uid"
    })
  };
  // User.create({ email: "maprimante@gmail.com" });
  // User.create({ email: "lprimante@gmail.com" });
  return User;
};