const express = require("express");
const app = express();
const { sequelize } = require("./models");
require("dotenv").config();

app.use(express.json());
app.use("/auth", require("./routes/auth"));

sequelize.sync().then(() => console.log("Database Synced"));
module.exports = app;
