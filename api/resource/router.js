// build your `/api/resources` router here

// build your `/api/projects` router here

const express = require("express");

const Resource = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("made it resource router");
});

module.exports = router;
