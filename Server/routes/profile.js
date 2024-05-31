const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/signup",async (req,res)=>{

    const user = req.body;

    const newUser = new User({
        username:user.username,
        email:user.email,
        password:user.password,
        firstName:user.firstName,
        lastName:user.lastName
    })

    newUser.save().then(()=>{
        res.json("User saved");
    }).catch((err)=>{
        res.json(err);
    })

})

router.post("/login",async (req,res)=>{
    const userDetails = req.body;
    const user = await User.findOne({email:userDetails.email})
    if(!user){
        res.json("User not found");
    }
    else{
        const password =await bcrypt.compare(userDetails.password,user.password);
        if(!password){
            res.json("Password incorrect");
        }else{
            let userWithoutPassword = user.toObject()
            delete userWithoutPassword.password;
            res.json(userWithoutPassword);
        }
    }
})

module.exports = router;