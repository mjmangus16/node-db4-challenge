exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Mexican Baked Chicken", servings: 4, difficulty: "medium" },
        { name: "Coffee Cake", servings: 8, difficulty: "easy" },
        { name: "Chicken Burritos", servings: 2, difficulty: "easy" },
        { name: "Shrimp Fried Rice", servings: 20, difficulty: "medium" },
        { name: "Mashed Potatoes", servings: 10, difficulty: "easy" },
        { name: "Macaroni and Cheese", servings: 20, difficulty: "hard" }
      ]);
    });
};
