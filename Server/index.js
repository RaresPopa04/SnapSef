const express = require('express');
const app = express();
const profile = require("./routes/profile");
const connectDb = require("./config/connectDb");

connectDb();
app.use(express.json());
app.use("/profile",profile);

app.get("/",(req,res)=>{
    res.send("Hello World");
})


app.listen(5000,()=>{
    console.log("Server pe 5000...");
})