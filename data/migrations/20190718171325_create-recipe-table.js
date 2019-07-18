exports.up = function(knex) {
  return knex.schema.createTable("recipes", tbl => {
    tbl.increments();
    tbl
      .string("name", 255)
      .unique()
      .notNullable();
    tbl.decimal("servings");
    tbl.string("difficulty", 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes");
};
