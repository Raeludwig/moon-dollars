const router = require('express').Router();
const usersRouter = require('./users-router');
const exampleRouter = require('./example-router');

router.use('/users', usersRouter);
router.use('/example', exampleRouter);

// router.use('/categories', categoriesRoutes);
// router.use('/drinks', drinksRoutes);
// router.use('/ingredients', ingredientsRoutes);
// router.use('/users', usersRoutes);
// router.use('/favorites', favoritesRoutes);

module.exports = router;
