const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const {authMiddleWare} = require("../includes/verifyPermission");
dotenv.config();

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
        const token = jwt.sign({username:newUser.username,email:newUser.email},process.env.JWT_SECRET,{expiresIn:"1h"});
        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            maxAge:3600000
        });
        res.sendStatus(200);
    }).catch((err)=>{
        console.log(err);
        if(err.code === 11000){
            // important to know that the error object has a key called keyValue that contains the key that is duplicated
            const key = Object.keys(err.keyValue)[0];
            res.status(400).json({error:`Mai exista un utilizator cu acest ${key}`});
        }else{
            res.status(500).json({error:"Eroare la server"});
        }
    })

})

router.post("/login",async (req,res)=>{
    const userDetails = req.body;
    
    const user = await User.findOne({username:userDetails.username})
    console.log(user);
    if(!user){
        res.status(400).json({error:"Nu exista un utilizator"});
    }

    else{
        const password =await bcrypt.compare(userDetails.password,user.password);
        if(!password){
            res.status(400).json({error:"Parola incorecta"});
        }else{
            let userWithoutPassword = user.toObject()
            delete userWithoutPassword.password;
            const token = jwt.sign({username:user.username,email:user.email},process.env.JWT_SECRET,{expiresIn:"1h"})
            res.cookie("token",token,{
                httpOnly:true,
                secure:true,
                maxAge:3600000
            });
            res.sendStatus(200);
        }
    }
})

router.get("/profile",authMiddleWare,async (req,res)=>{
    res.json({message:`You are authorized ${req.user.username}`});
})

module.exports = router;