const route = require("express").Router()
const Middleware = require('../Middleware/mld')
const controller = require("../Controller/clr")



route.get("/register",controller.register);

route.get("/product/:id",controller.product);

route.get("/verify",Middleware.queryValidation,controller.verify);


module.exports = route


