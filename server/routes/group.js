const router = require("express").Router();
const Group = require("../models/Group");
const Split = require("../models/Split");

router.post("/create", async (req, res) => {
  const group = await Group.create(req.body);
  res.json(group);
});

router.post("/split", async (req, res) => {
  const { amount, members } = req.body;

  const splitAmount = amount / members.length;

  const split = await Split.create({
    ...req.body,
    splitAmount
  });

  res.json(split);
});

router.get("/:groupId", async (req, res) => {
  const data = await Split.find({ groupId: req.params.groupId });
  res.json(data);
});

module.exports = router;