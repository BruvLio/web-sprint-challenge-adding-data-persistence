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
    .createTable("resources", (table) => {
      table.increments("resource_id");
      table.string("resource_name").notNullable().unique();
      table.string("resource_description");
    })
    .createTable("tasks", (table) => {
      table.increments("task_id");
      table.string("task_description").notNullable();
      table.string("task_notes");
      table.boolean("task_completed").defaultTo(false);
      table
        .integer("project_id")
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("project_resources", (table) => {
      table.increments();
      table
        .integer("project_id")
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      table
        .integer("resource_id")
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};

// - [ ] A **resource assignment** connects a resource and a project, and is stored
// in a `project_resources` table. You decide what columns to use.
