const express = require("express");
require("dotenv").config();
const connectDB = require("./connection/db");

const app = express();

const PORT = process.env.PORT || 8989;

connectDB();

app.listen(PORT, () => {
  console.log(`Application is Running on ${PORT}`);
});
