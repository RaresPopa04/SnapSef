const express = require('express');
const app = express();
const profileRoute = require("./routes/profile");
const connectDb = require("./config/connectDb");
const cookRoute = require("./routes/cook");
const recipeRoute = require("./routes/recipe");

connectDb();
app.use(express.json());
app.use("/profile",profileRoute);
app.use("/cook",cookRoute)
app.use("/recipes",recipeRoute);

app.get("/",(req,res)=>{
    res.send("Hello World");
})


app.listen(5000,()=>{
    console.log("Server pe 5000...");
})