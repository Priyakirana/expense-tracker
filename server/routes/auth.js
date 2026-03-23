const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash });

  res.json(user);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ msg: "No user" });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.json({ msg: "Wrong password" });

  const token = jwt.sign({ id: user._id }, "secret");

  res.json({ user, token });
});

module.exports = router;