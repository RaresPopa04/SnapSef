const express = require('express');
const app = express();
const profile = require("./routes/profile");
const connectDb = require("./config/connectDb");

connectDb();
app.use("/profile",profile);


app.listen(5000,()=>{
    console.log("Server pe 5000...");
})