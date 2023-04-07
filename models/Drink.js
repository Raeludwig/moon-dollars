const { Model } = require("sequelize");
const sequelize = require("../config/connection.js");
const { DataTypes } = require("sequelize");

class Drink extends Model {}

Drink.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // field: "drink_name",
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    ingredients: {
      type: DataTypes.STRING,
      get() {
        return this.getDataValue("ingredients").split(";");
      },
      set(val) {
        this.setDataValue("ingredients", val.join(";"));
      },
    },
  },
  {
    sequelize,
    tableName: "drink",
  }
);

module.exports = Drink;
