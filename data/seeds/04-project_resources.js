/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("project_resources").del();
  await knex("project_resources").insert([
    { project_id: 2, resource_id: 1 },
    { project_id: 2, resource_id: 2 },
    { project_id: 3, resource_id: 3 },
    { project_id: 2, resource_id: 4 },
    { project_id: 1, resource_id: 5 },
  ]);
};

// .createTable("project_resources", (table) => {
//   table.increments();
//   table
//     .integer("project_id")
//     .notNullable()
//     .references("project_id")
//     .inTable("projects")
//     .onDelete("RESTRICT")
//     .onUpdate("RESTRICT");
//   table
//     .integer("resource_id")
//     .notNullable()
//     .references("resource_id")
//     .inTable("resources")
//     .onDelete("RESTRICT")
//     .onUpdate("RESTRICT");
// });
// };
