const router = require('express').Router();
const { Categories } = require('../../models');
const withAuth = require('../../util/withAuth');

router.get('/', withAuth, async (req, res) => {
try {
    const categoriesData = await Categories.findAll();
    const categories = categoriesData.map((category) => category.get({ plain: true }));
    res.render('categories', {
        categories,
        logged_in: req.session.logged_in
    });
} catch (error) {
    res.status(500).json(error);
}
});

module.exports = router;