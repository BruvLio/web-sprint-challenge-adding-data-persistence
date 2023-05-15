// build your `/api/tasks` router here

const express = require("express");

const Tasks = require("./model");

const router = express.Router();

//eslint-disable-next-line
router.get("/", async (req, res, next) => {
  try {
    const task = await Tasks.get();
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { task_description, project_id } = req.body;
    if (!task_description || !project_id) {
      res.status(400).json({
        message: `Missing either task_description or task_notes or task_completed or project_id`,
      });
    } else {
      const newTask = await Tasks.insert(req.body);
      res.status(201).json(newTask);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
