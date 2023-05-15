// build your `/api/tasks` router here

const express = require("express");

const Task = require("./model");

const router = express.Router();

//eslint-disable-next-line
router.get("/", async (req, res, next) => {
  console.log("made it to task router");
});

module.exports = router;
