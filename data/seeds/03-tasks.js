/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tasks").del();
  await knex("tasks").insert([
    {
      task_description: "Plan schema",
      task_notes: "null",
      task_completed: false,
      project_id: 2,
    },
    {
      task_description: "Grocery shopping",
      task_notes: "shop for ingredients for sauce",
      task_completed: false,
      project_id: 3,
    },
    {
      task_description: "Planning",
      task_notes: "nul",
      task_completed: false,
      project_id: 1,
    },
    {
      task_description: "Convert code to use classes",
      task_notes: "",
      task_completed: false,
      project_id: 4,
    },
  ]);
};

// .createTable("tasks", (table) => {
//   table.increments("task_id");
//   table.string("task_description").notNullable();
//   table.string("task_notes");
//   table.boolean("task_completed").defaultTo(false);
//   table
//     .integer("project_id")
//     .notNullable()
//     .references("project_id")
//     .inTable("projects")
//     .onDelete("RESTRICT")
//     .onUpdate("RESTRICT");
// })
