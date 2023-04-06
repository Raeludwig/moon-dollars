const router = require('express').Router();
const usersRouter = require('./users-router');
const customDrinksRoute = require('./customDrinksRoute');
const categoriesRoute = require('./categoriesRoute');
const ingredientRoutes = require('./ingredientRoutes');


router.use('/users', usersRouter);
router.use('/Drink', customDrinksRoute);
router.use('/categories', categoriesRoute);
router.use('/ingredients', ingredientRoutes);


module.exports = router;
