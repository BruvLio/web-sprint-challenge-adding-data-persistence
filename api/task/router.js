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
  } catch (err) {
    next(err);
  }
});

module.exports = router;
