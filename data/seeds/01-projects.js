/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("projects").del();
  await knex("projects").insert([
    {
      project_name: "Larry",
      project_description: "Code hangman game",
      project_completed: true,
    },
    {
      project_name: "Lionel",
      project_description: "Complete Sprint Challenge",
      project_completed: false,
    },
    {
      project_name: "LaToya",
      project_description: "Finish Sauce samples",
      project_completed: true,
    },
  ]);
};
