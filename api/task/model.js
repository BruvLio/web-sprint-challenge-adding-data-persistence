// build your `Task` model here
const db = require("../../data/dbConfig");

const get = async () => {
  const res = await db("tasks");
  return res.map((task) => ({
    ...task,
    task_completed: Boolean(task.task_completed),
  }));
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
