const router = require('express').Router();
const { Ingredients } = require('../../models');
const withAuth = require('../../util/withAuth');

router.get('/', withAuth, async (req, res) => {
try {
    const ingredientsData = await Ingredients.findAll();
    const ingredients = ingredientsData.map((category) => category.get({ plain: true }));
    res.render('ingredients', {
        ingredients,
        logged_in: req.session.logged_in
    });
} catch (error) {
    res.status(500).json(error);
}
});

module.exports = router;