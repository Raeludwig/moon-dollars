const IngredientHasDrink = require('./IngredientHasDrink');
const Ingredients = require('./Ingredients');
const Drinks = require('./Drinks');
const User = require('./User');
const Categories = require('./Categories');

// Define relationships between models
Drinks.belongsTo(User, { foreignKey: 'User_userid' });
User.hasMany(Drinks, { foreignKey: 'User_userid' });

IngredientHasDrink.belongsTo(Drinks, { foreignKey: 'Drink_idDrinks' });
IngredientHasDrink.belongsTo(Ingredients, { foreignKey: 'ingredient_idingredient' });
Drinks.belongsToMany(Ingredients, { through: IngredientHasDrink });
Ingredients.belongsToMany(Drinks, { through: IngredientHasDrink });

Drinks.belongsTo(Categories, { foreignKey: 'Categories_idCategories' });
Categories.hasMany(Drinks, { foreignKey: 'Categories_idCategories' });

module.exports = {
  User,
  Drinks,
  Ingredients,
  IngredientHasDrink,
  Categories,
};
