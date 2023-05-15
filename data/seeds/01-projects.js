/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("projects").insert([
    {
      project_name: "rowValue1",
      project_description: "",
      project_completed: false,
    },
    {
      project_name: "rowValue1",
      project_description: "",
      project_completed: false,
    },
    {
      project_name: "rowValue1",
      project_description: "",
      project_completed: false,
    },
  ]);
};
