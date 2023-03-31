const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}


  module.exports = sequelize => {
    const attributes = {
      idCategories: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: null,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "idCategories"
      },
      CategorieName: {
        type: DataTypes.STRING(45),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "CategorieName"
      }
    };
    const options = {
      tableName: "categories",
      comment: "",
      indexes: []
    };
    const CategoriesModel = sequelize.define("categories_model", attributes, options);
    return CategoriesModel;
  };