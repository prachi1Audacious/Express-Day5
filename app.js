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

const users= [];

app.post("/register", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send("Name, Email, are required!");
  }
  const user = users.find((demo) => users.email === email);
  if (user) {
    return res.status(400).send("Email already exists!");
    
  }
  const newUser = {
    name,
    email
    
  };
  demo.push(newUser);
  // log user data to console
  console.log(`New user: ${JSON.stringify(newUser)}`);
  return res.status(201).send("Signup Successful!");
});


module.exports ={users};



//server port
app.listen(port,() => {
    console.log("server is running");
})

