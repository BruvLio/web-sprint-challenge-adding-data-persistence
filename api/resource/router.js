// build your `/api/resources` router here
const express = require("express");

const Resources = require("./model");

const router = express.Router();

//eslint-disable-next-line
router.get("/", async (req, res, next) => {
  try {
    const resources = await Resources.getResources();
    res.status(200).json(resources);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { resource_name, resource_description } = req.body;
    if (!resource_name || !resource_description) {
      res.status(400).json({
        message: `Resource needs name and description`,
      });
    } else {
      const newResource = await Resources.insertResource(req.body);
      res.status(201).json(newResource);
    }
  } catch (err) {
    next(err);
  }
});
module.exports = router;
