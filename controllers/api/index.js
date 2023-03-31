const router = require('express').Router();
const usersRouter = require('./users-router');
const exampleRouter = require('./example-router');

router.use('/users', usersRouter);
router.use('/example', exampleRouter);
const categoriesRoute = require('./categoriesRoute');
// const drinksRoutes = require('./routes/drinksRoutes');
// const ingredientsRoutes = require('./routes/ingredientsRoutes');
// const usersRoutes = require('./routes/usersRoutes');
// const favoritesRoutes = require('./routes/favoritesRoutes');


router.use('/categories', categoriesRoute);
// router.use('/drinks', drinksRoutes);
// router.use('/ingredients', ingredientsRoutes);
// router.use('/users', usersRoutes);
// router.use('/favorites', favoritesRoutes);

module.exports = router;
