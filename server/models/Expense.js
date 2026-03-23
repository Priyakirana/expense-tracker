const mongoose = require("mongoose");

module.exports = mongoose.model("Expense", {
  userId: String,
  amount: Number,
  category: String,
  note: String,
  date: { type: Date, default: Date.now }
});