const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

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
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Categories",
        key: "id",
      },
      field: "category_id",
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Ingredient",
    tableName: "Ingredients",
  }
);

const Categories = require('./Categories'); // import the Categories model class

Ingredients.belongsTo(Categories, { foreignKey: 'categoryId' });
Categories.hasMany(Ingredients, { foreignKey: 'categoryId' });

module.exports = Ingredients;
