const express = require("express");
const app = express();

const gatewayLogger = require("./src/middleware/gatewayLogger");
const phoneProxy = require("./src/routes/phoneProxy");
const userProxy = require("./src/routes/userProxy");

app.use(gatewayLogger);

app.use("/api/phones", phoneProxy);
app.use("/api/users", userProxy);

module.exports = app;
