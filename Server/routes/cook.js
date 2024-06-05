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
                email:cook.email
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
        res.sendStatus(200)
    }).catch((error)=>{
        console.log(error);
        res.status(400).send("Eroare la server");
    })
})


router.post("/login",async (req,res)=>{
    const cook = req.body;

    const cookFound =await  Cook.findOne({username:cook.username});
    if(!cookFound) res.status(400).send("Bucatarul nu a fost gasit");
    const insertedPassword = cook.password;
    const comparePassword = await bcrypt.compare(insertedPassword,cookFound.password);
    if(!comparePassword){
        res.status(400).send("Parola gresita");
    }else{
        const token = jwt.sign(
            {
                username:cook.username,
                email:cook.email
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

        res.sendStatus(200)
    }

})

module.exports = router;