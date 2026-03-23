const mongoose = require("mongoose");

module.exports = mongoose.model("Group", {
  name: String,
  members: [String],
  createdBy: String
});