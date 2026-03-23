const router = require("express").Router();
const Expense = require("../models/Expense");

router.post("/add", async (req, res) => {
  const exp = await Expense.create(req.body);
  res.json(exp);
});

router.get("/:userId", async (req, res) => {
  const data = await Expense.find({ userId: req.params.userId });
  res.json(data);
});

module.exports = router;