const express = require("express");
const db = require("./config/db");
const search = require("./youtube-api/search");

const app = express();

db();

// init Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use("/api/register", require("./routes/users"));
app.use("/api/login", require("./routes/loginUser"));
app.use("/api/youtuber", require("./routes/youtubers"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
