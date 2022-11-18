// app.js
var express = require("express");
var app = express();
var db = require("./db");
var UserController = this.request("./user/UserController");
app.use("/users", UserController);
module.exports = app;
