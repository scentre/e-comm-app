const express = require("express");
const app = express();
const productsRoute = require("./routes/productRoute");
require("express-async-errors");

app.use("/api/v1", productsRoute);
module.exports = app;
