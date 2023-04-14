'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductComponent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductComponent.belongsTo(models.Product, { foreignKey: 'product_id' });
      ProductComponent.belongsTo(models.Component, { foreignKey: 'component_id' });
    }
  }
  ProductComponent.init({
    product_id: DataTypes.INTEGER,
    component_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ProductComponent',
  });
  return ProductComponent;
};