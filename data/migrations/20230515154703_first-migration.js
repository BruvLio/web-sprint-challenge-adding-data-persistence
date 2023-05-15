/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("project_name").notNullable();
      table.string("project_description");
      table.boolean("project_completed").defaultTo(false);
    })
    //do we need to make the resourece reference the projects table?
    .createTable("resource_id", () => {});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("projects")
    .dropTableIfExists("projects")
    .dropTableIfExists("projects");
};

// - [ ] A **resource** is anything needed to complete a project and is stored
// in a `resources` table with the following columns:

//   - [ ] `resource_id` - primary key
//   - [ ] `resource_name` - required and unique
//   - [ ] `resource_description` - optional
