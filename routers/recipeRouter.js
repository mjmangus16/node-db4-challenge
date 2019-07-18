const router = require("express").Router();
const db = require("../data/models/recipeBook");

router.get("/", async (req, res) => {
  try {
    const recipes = await db.getRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/:id/shoppingList", async (req, res) => {
  const { id } = req.params;
  try {
    const list = await db.getShoppingList(id);
    if (list.length === 0) {
      res.status(404).json({
        message: `No ingredients for recipe with id ${id}.`
      });
    } else {
      res.status(200).json(list);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/:id/instructions", async (req, res) => {
  const { id } = req.params;
  try {
    const list = await db.getInstructions(id);
    if (list.length === 0) {
      res.status(404).json({
        message: `No instructions for recipe with id ${id}.`
      });
    } else {
      res.status(200).json(list);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
