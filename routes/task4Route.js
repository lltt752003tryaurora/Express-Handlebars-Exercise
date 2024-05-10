const express = require('express');
const route = express.Router();
const controller = require("../controllers/controllers.js")

route.get("/", controller.task4List)
route.get("/:name", controller.task4Details )
module.exports = route;
