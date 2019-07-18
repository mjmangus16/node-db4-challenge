const router = require("express").Router();
const db = require("../data/data-config");

router.get("/:id/recipes", async (req, res) => {
  const { id } = req.params;
  try {
    // SELECT r.name FROM recipes AS r JOIN ingredients AS i
    // ON
    // GET /api/ingredients/:id/recipes: all recipes in the system that utilize a single ingredient
  } catch (err) {}
});

module.exports = router;
