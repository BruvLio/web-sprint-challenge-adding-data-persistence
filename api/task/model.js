// build your `Task` model here
const db = require("../../data/dbConfig");

const get = async () => {
  return db("tasks");
};

const getTaskById = async (task_id) => {
  return db("tasks").where("task_id", task_id).first();
};

const insert = async (task) => {
  const [id] = await db("tasks").insert(task);
  return getTaskById(id);
};

module.exports = {
  get,
  getTaskById,
  insert,
};
