require('dotenv').config();
const sequelize = require('../config/connection');
const { User, Categories, Ingredients } = require('../models');
const categoriesData = require('./category-seeds.json');
const ingredientsData = require('./ingredient-seeds.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    await Categories.bulkCreate(categoriesData, {
      individualHooks: true,
      returning: true,
    });
    await Ingredients.bulkCreate(ingredientsData, {
      individualHooks: true,
      returning: true,
    });

    console.log('Finished seeding database.');
  } catch (error) {
    console.error(error);
    console.error(
      'An error occurred attempting to seed the database. Scroll up for additional details.'
    );
  } finally {
    await sequelize.close();
    process.exit(0);
  }
};

seedDatabase();
