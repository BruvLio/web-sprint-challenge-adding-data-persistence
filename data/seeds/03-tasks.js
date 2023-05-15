/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tasks").del();
  await knex("tasks").insert([
    {
      task_description: "rowValue1",
      task_notes: "",
      task_completed: false,
      project_id: 1,
    },
    {
      task_description: "rowValue1",
      task_notes: "",
      task_completed: false,
      project_id: 1,
    },
    {
      task_description: "rowValue1",
      task_notes: "",
      task_completed: false,
      project_id: 1,
    },
    {
      task_description: "rowValue1",
      task_notes: "",
      task_completed: false,
      project_id: 1,
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
