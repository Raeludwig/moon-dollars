const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    ingredient_idingredient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "ingredient_idingredient",
      references: {
        key: "idingredient",
        model: "ingredient_model"
      }
    },
    Drink_idDrinks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "Drink_idDrinks",
      references: {
        key: "idDrinks",
        model: "drink_model"
      }
    }
  };
  const options = {
    tableName: "ingredient_has_drink",
    comment: "",
    indexes: [{
      name: "fk_ingredient_has_Drink_Drink1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Drink_idDrinks"]
    }, {
      name: "fk_ingredient_has_Drink_ingredient1_idx",
      unique: false,
      type: "BTREE",
      fields: ["ingredient_idingredient"]
    }]
  };
  const IngredientHasDrinkModel = sequelize.define("ingredient_has_drink_model", attributes, options);
  return IngredientHasDrinkModel;
};