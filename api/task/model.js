// build your `Task` model here
const db = require("../../data/dbConfig");

const get = async () => {
  const res = await db("tasks")
    .leftJoin("projects", "projects.project_id", "tasks.project_id")
    .select(
      "tasks.task_id",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.task_completed",
      "projects.project_name",
      "projects.project_description"
    );

  return res.map((task) => ({
    ...task,
    task_completed: Boolean(task.task_completed),
  }));
};

const getTaskById = async (task_id) => {
  const res = await db("tasks").where("task_id", task_id).first();
  return { ...res, task_completed: Boolean(res.task_completed) };
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

// - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`
