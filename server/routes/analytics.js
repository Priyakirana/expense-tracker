const router = require("express").Router();
const Expense = require("../models/Expense");

router.get("/:userId", async (req, res) => {
  const data = await Expense.find({ userId: req.params.userId });

  const summary = {};

  data.forEach(e => {
    summary[e.category] = (summary[e.category] || 0) + e.amount;
  });

  res.json(summary);
});

module.exports = router;