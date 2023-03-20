const route = require("express").Router()
//const controller = require("../Controller/clr")
const controller = require("../Controller/cntrl")


//route.post("/demo",controller.demo);
route.post("/users",controller.users);

module.exports = route;