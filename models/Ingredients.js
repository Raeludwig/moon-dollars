const { Model } = require('sequelize');
const sequelize = require('../config/connection.js');
const { DataTypes } = require('sequelize');
const Categories = require('./Categories');

class Ingredients extends Model {}

Ingredients.init(
  {
    idingredient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "idingredient",
    },
    ingredientName: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: "ingredientName",
    },
    Categories_idCategories: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "Categories_idCategories",
      references: {
        model: Categories,
        key: "idCategories",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Ingredients",
    tableName: "ingredient",
  }
);

module.exports = Ingredients;
