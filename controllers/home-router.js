const router = require('express').Router();
const { User } = require('../models');
const Categories = require('../models/Categories');
const Ingredients = require('../models/Ingredients');

// use withAuth middleware to redirect from protected routes.
// const withAuth = require("../util/withAuth");

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

router.get('/', async (req, res) => {
  //Code goes here
  try {
    const categoriesData = await Categories.findAll();
    const ingredientsData = await Ingredients.findAll();

    const categories = categoriesData.map((category) => category.get({ plain: true }));
    const ingredients = ingredientsData.map((ingredient) => ingredient.get({ plain: true }));

    console.log("categories error", { categories, ingredients});
    res.render('customDrink', { categories, ingredients });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  } 
});

router.get('/', async (req, res) => {
  try {
    let user;
    if (req.session.isLoggedIn) {
      user = await User.findByPk(req.session.userId, {
        exclude: ['password'],
        raw: true,
      });
    }
    res.render('home', {
      title: 'Home Page',
      isLoggedIn: req.session.isLoggedIn,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('⛔ Uh oh! An unexpected error occurred.');
  }
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Log-In Page' });
});

router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign-Up Page' });
});

router.get('/customDrink', (req, res) => {
  res.render('customDrink', { title: 'Custom Drink Page'} );
});


module.exports = router;
