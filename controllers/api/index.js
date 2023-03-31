const router = require('express').Router();
const usersRouter = require('./users-router');
const exampleRouter = require('./example-router');
const categoriesRoute = require('./categoriesRoute');
const ingredientRoutes = require('./ingredientRoutes');


router.use('/users', usersRouter);
router.use('/example', exampleRouter);
router.use('/categories', categoriesRoute);
router.use('/ingredients', ingredientRoutes);


module.exports = router;
