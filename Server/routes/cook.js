const express = require("express");
const router = express.Router();
const Cook = require("../models/Cook");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


router.post("/signup",async (req,res)=>{
    const cook = req.body;
    const newCook =new Cook({
        username:cook.username,
        email:cook.email,
        password:cook.password,
        firstName:cook.firstName,
        lastName:cook.lastName
    }
    )

    newCook.save().then(()=>{
        const token = jwt.sign(
            {
                username:cook.username,
                email:cook.email,
                cook:true,
            }, 
            process.env.JWT_SECRET, 
            {expiresIn:"1h"});
        
        res.cookie("token",token,
            {
                httpOnly:true,
                secure:true,
                maxAge:3600000

            }
        )
        return res.sendStatus(200)
    }).catch((error)=>{
        console.log(error);
        if(error.code === 11000){
            const key = Object.keys(error.keyValue)[0];
            return res.status(400).json({error:`Mai exista un utilizator cu acest ${key}`});
        }else{
            return res.status(500).json({error:"Eroare la server"});
        }
    })
})


router.post("/login",async (req,res)=>{
    const cook = req.body;

    const cookFound =await  Cook.findOne({username:cook.username});
    if(!cookFound) return res.status(400).send("Bucatarul nu a fost gasit");
    else{
        const insertedPassword = cook.password;
        const comparePassword = await bcrypt.compare(insertedPassword,cookFound.password);
        if(!comparePassword){
           return res.status(400).send("Parola gresita");
        }else{
            const token = jwt.sign(
                {
                    username:cook.username,
                    email:cook.email,
                    cook:true,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn:"1h"
                }
            )
            res.cookie("token",token,
                {
                    httpOnly:true,
                    secure:true,
                    maxAge:3600000
                }
            )
    
            return res.sendStatus(200)
        }

    }
    

})


module.exports = router;