const express = require('express');
const route = express.Router();
const controller = require("../controllers/controllers.js")

route.get("/", controller.task1)
module.exports = route;
