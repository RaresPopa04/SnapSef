const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const authMiddleWare = require("../includes/verifyPermission");
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
        res.status(201).json({token});
    }).catch((err)=>{
        if(err.code === 11000){
            res.status(400).json({error:"Mai exista un utilizator cu acest email"});
        }else{
            res.status(500).json({error:"Eroare la server"});
        }
    })

})

router.post("/login",async (req,res)=>{
    const userDetails = req.body;
    
    const user = await User.findOne({email:userDetails.email})
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
            res.status(200).json({token});
        }
    }
})

router.get("/profile",authMiddleWare,async (req,res)=>{
    res.json({message:`You are authorized ${req.user.username}`});
})

module.exports = router;