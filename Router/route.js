const route = require("express").Router()
const controller = require("../Controller/clr")



route.post("/demo",controller.demo);


module.exports = route;