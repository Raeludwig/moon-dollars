const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idingredient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "idingredient"
    },
    ingredientName: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ingredientName"
    },
    Categories_idCategories: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Categories_idCategories",
      references: {
        key: "idCategories",
        model: "categories_model"
      }
    }
  };
  const options = {
    tableName: "ingredient",
    comment: "",
    indexes: [{
      name: "fk_ingredient_Categories1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Categories_idCategories"]
    }]
  };
  const IngredientModel = sequelize.define("ingredient_model", attributes, options);
  return IngredientModel;
};