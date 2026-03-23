const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/expense", require("./routes/expense"));
app.use("/api/group", require("./routes/group"));
app.use("/api/analytics", require("./routes/analytics"));

// Static
app.use(express.static(path.join(__dirname, "../public")));

app.listen(5000, () => console.log("Server running on 5000"));
