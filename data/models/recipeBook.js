const db = require("../data-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

async function getRecipes() {
  return await db("recipes");
}

async function getShoppingList(recipe_id) {
  return await db("ingredients").where({ recipe_id });
}

async function getInstructions(recipe_id) {
  return await db("instructions").where({ recipe_id });
}
