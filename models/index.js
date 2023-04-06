const User = require("./User");
const Categories = require("./Categories");
const Drink = require("./Drink");
const Ingredients = require("./Ingredients");

// Define sequelize associations in this file.

Categories.hasMany(Ingredients, {
  foreignKey: "category_id",
});

Ingredients.belongsTo(Categories, {
  foreignKey: "category_id",
  through: Drink,
});

User.hasMany(Drink, {
  foreignKey: "user_id",
});

Drink.belongsTo(User, {
  foreignKey: "user_id",
});

// Drink.hasMany(Ingredients, {
//   foreignKey: "drink_id",
// });

Ingredients.belongsTo(Drink, {
  foreignKey: "ingredients_id",
});

Drink.belongsTo(Categories, {
  foreignKey: "category_id",
});

Ingredients.belongsTo(Categories, {
  foreignKey: "category_id",
});

Categories.hasMany(Ingredients, {
  foreignKey: "category_id",
});

module.exports = { User, Categories, Drink, Ingredients };
