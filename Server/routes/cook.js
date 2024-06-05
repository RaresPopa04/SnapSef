const express = require("express");
const router = express.Router();
const Cook = require("../models/Cook");
const jwt = require("jsonwebtoken");


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
                email:cook.email
            }, 
            process.env.JWT_SECRET, 
            {expiresIn:"1h"});
        
        res.cookie("token",token,
            {
                httpOnly:true,
                secure:true,
                nameSite:"Strict",
                maxAge:3600000

            }
        )
        res.sendStatus(200)
    }).catch((error)=>{
        console.log(error);
        res.status(400).send("Eroare la server");
    })
})

module.exports = router;