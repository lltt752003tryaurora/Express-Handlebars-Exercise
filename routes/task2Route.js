const express = require('express');
const route = express.Router();
const controller = require("../controllers/controllers.js")

route.get("/", controller.task2)
// gửi form bằng method post trong task 2
route.post("/", controller.task2Post)
module.exports = route;
