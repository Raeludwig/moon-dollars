const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idDrinks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idDrinks"
    },
    User_userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "User_userid",
      references: {
        key: "userid",
        model: "user_model"
      }
    },
    Drink_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Drink name"
    }
  };
  const options = {
    tableName: "drink",
    comment: "",
    indexes: [{
      name: "fk_Drink order_User_idx",
      unique: false,
      type: "BTREE",
      fields: ["User_userid"]
    }]
  };
  const DrinkModel = sequelize.define("drink_model", attributes, options);
  return DrinkModel;
};