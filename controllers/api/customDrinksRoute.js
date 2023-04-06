const router = require("express").Router();
const { Drink } = require("../../models");
const withAuth = require("../../util/withAuth");

router.post("/", withAuth, async (req, res) => {
  console.log(req.body);
  try {
    console.log(req.session);
    const newDrink = await Drink.create({
      name: req.body.name,
      ingredients: req.body.ingredients,
      user_id: req.session.userId,
    });

    res.status(200).json(newDrink);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const drinkData = await Drink.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!drinkData) {
//       res.status(404).json({ message: 'No drink found with this id!' });
//       return;
//     }

//     res.status(200).json(drinkData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
