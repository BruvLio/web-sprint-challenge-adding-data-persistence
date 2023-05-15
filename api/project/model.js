// build your `Project` model here
const db = require("../../data/dbConfig");

const get = async () => {
  const res = await db("projects");
  return res.map((project) => ({
    ...project,
    project_completed: Boolean(project.project_completed),
  }));
};

const getById = async (project_id) => {
  const res = await db("projects").where("project_id", project_id).first();
  return { ...res, project_completed: Boolean(res.project_completed) };
};

const insert = async (project) => {
  const [id] = await db("projects").insert(project);
  return getById(id);
};
module.exports = {
  get,
  getById,
  insert,
};
