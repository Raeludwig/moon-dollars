const { Model } = require('sequelize');
const sequelize = require('../config/connection.js');
const { DataTypes } = require('sequelize');
// const Categories = require('./Categories');

class Drink extends Model {}

Drink.init(
  {
    idDrinks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'idDrinks',
    },
    User_userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'user_model',  //not sure if this is needed
      //   key: 'userid',
      // },
      field: 'User_userid',
    },
    Drink_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'Drink_name',
    },
  },
  {
    sequelize,
    tableName: 'drink',
    // indexes: [
    //   {
    //     name: 'fk_Drink order_User_idx',
    //     unique: false,
    //     type: 'BTREE',
    //     fields: ['User_userid'],
    //   },
    // ],
  }
);

module.exports = Drink;
