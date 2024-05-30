const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/signup",async (req,res)=>{

    const user = req.body;

    const newUser = new User({
        name:user.name,
        email:user.email,
        password:user.password
    })

    newUser.save().then(()=>{
        res.json("User saved");
    }).catch((err)=>{
        res.json(err);
    })

})

module.exports = router;