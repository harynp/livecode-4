'use strict';
module.exports = (sequelize, DataTypes) => {
  var Supplier = sequelize.define('Supplier', {
    name: DataTypes.STRING,
    kota: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  Supplier.associate = function(models){
    Supplier.hasMany(models.Item)
    Supplier.hasMany(models.SupplierItem)
    // Supplier.belongsToMany(models.Item,{through: 'SupplierItem'})
  }
  return Supplier;
};
