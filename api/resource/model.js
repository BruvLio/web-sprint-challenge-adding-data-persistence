// build your `Resource` model here
const db = require("../../data/dbConfig");

const getResources = async () => {
  return db("resources");
};
const insertResource = async (resource) => {
  return db("resources").insert(resource);
};
module.exports = {
  getResources,
  insertResource,
};
