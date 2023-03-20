const express = require("express");
const app = express();
const port = 8080;
const route = require("./Router/route")


//middleware
app.use(express.json());
app.use(route);


//Homepage routing

app.get("/",(req,res) => {
    res.status(200).send('my name is prachi');
})


//server port
app.listen(port,() => {
    console.log("server is running");
})