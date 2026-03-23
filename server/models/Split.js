const mongoose = require("mongoose");

module.exports = mongoose.model("Split", {
  groupId: String,
  paidBy: String,
  amount: Number,
  members: [String],
  splitAmount: Number
});