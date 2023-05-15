/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("resources").del();
  await knex("resources").insert([
    { resource_name: "vscode", resource_description: "ide for coding" },
    { resource_name: "pomodoro", resource_description: "focus tool" },
    {
      resource_name: "water bottle",
      resource_description: "water to keep you hydrated",
    },
    {
      resource_name: "lofi music",
      resource_description: "helps with focusin on task",
    },
  ]);
};
