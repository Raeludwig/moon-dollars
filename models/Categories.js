const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Categories extends Model {}

Categories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Categories',
    tableName: 'Categories', // update the table name to match the actual name in your database
  }
);

const Ingredients = require('./Ingredients'); // import the Ingredients model class

Categories.hasMany(Ingredients, { foreignKey: 'categoryId' });

Ingredients.belongsTo(Categories, { foreignKey: 'categoryId' });

module.exports = Categories;
