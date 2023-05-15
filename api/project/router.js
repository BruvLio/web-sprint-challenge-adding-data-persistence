// build your `/api/projects` router here

const express = require("express");

const Projects = require("./model");

const router = express.Router();

//eslint-disable-next-line
router.get("/", async (req, res, next) => {
  console.log("made it to project router");
});

module.exports = router;
