// build your `Resource` model here
const db = require("../../data/dbConfig");

const getResources = async () => {
  return db("resources");
};
const getResourceById = async (resource_id) => {
  return db("resources").where("resource_id", resource_id).first();
};
const insertResource = async (resource) => {
  const [id] = await db("resources").insert(resource);
  return getResourceById(id);

  //   return db("resource").insert(resource).then(([id])=> getResourceById(id))
};
module.exports = {
  getResources,
  insertResource,
};
