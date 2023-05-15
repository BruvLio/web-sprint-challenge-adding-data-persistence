// build your `/api/projects` router here

const express = require("express");

const Projects = require("./model");

const projectRouter = express.Router();

projectRouter.get("/", async (req, res, next) => {
  console.log("made it to project router");
});

module.exports = projectRouter;
