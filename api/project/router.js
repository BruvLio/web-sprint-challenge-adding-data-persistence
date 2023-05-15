// build your `/api/projects` router here

const express = require("express");

const Projects = require("./model");

const router = express.Router();

//eslint-disable-next-line
router.get("/", async (req, res, next) => {
  try {
    const projects = await Projects.get();
    res.status(200).json(projects);
    console.log(res);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { project_name } = req.body;
    if (
      !project_name
      // !project_description
      // !Object.hasOwn(req.body, "project_completed"

      // )
    ) {
      res.status(400).json({
        message: `Missing either project_name or project_description or project_completed`,
      });
    } else {
      const newProject = await Projects.insert(req.body);
      res.status(201).json(newProject);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
