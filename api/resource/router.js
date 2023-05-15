// build your `/api/resources` router here

// build your `/api/projects` router here

const express = require("express");

const Resources = require("./model");

const router = express.Router();

//eslint-disable-next-line
router.get("/", async (req, res, next) => {
  console.log("made it to resource router");
});

module.exports = router;
