const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const Drinks = require('./Drinks.js');
const Ingredients = require('./Ingredients.js');

const IngredientHasDrink = sequelize.define(
  'IngredientHasDrink',
  {
    ingredient_idingredient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      references: {
        model: Ingredients,
        key: 'idingredient',
      },
    },
    Drink_idDrinks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      references: {
        model: Drinks,
        key: 'idDrinks',
      },
    },
  },
  {
    tableName: 'ingredient_has_drink',
    comment: '',
    indexes: [
      {
        name: 'fk_ingredient_has_Drink_Drink1_idx',
        unique: false,
        type: 'BTREE',
        fields: ['Drink_idDrinks'],
      },
      {
        name: 'fk_ingredient_has_Drink_ingredient1_idx',
        unique: false,
        type: 'BTREE',
        fields: ['ingredient_idingredient'],
      },
    ],
  }
);

Drinks.belongsToMany(Ingredients, { through: IngredientHasDrink });

module.exports = IngredientHasDrink;
