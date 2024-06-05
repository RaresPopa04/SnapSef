const express = require("express")
const router = express.Router();
const Recipe = require("../models/Recipe");
const Cook = require("../models/Cook");
const jwt = require("jsonwebtoken");

router.get("/", async (req,res)=>{
    const recipes = await Recipe.find({});
    if(!recipes || recipes.length == 0){
        res.status(400).send("Nu sunt retete")
    }
    res.status(200).json(recipes);
})

router.post("/newRecipe", async (req,res)=>{
    const recipe  = req.body

    const token = req.headers.authorization.split(" ")[1];
    if(!token){
        res.status(400).send("Token invalid");

    }else{
        const isCook = jwt.verify(token,process.env.JWT_SECRET).cook;
        if(!isCook){
            res.status(400).send("Nu esti bucatar");
        }
        else{
            const cookUsername = jwt.verify(token,process.env.JWT_SECRET).username;
            const cook = await Cook.findOne({username:cookUsername});
            const cookID = cook._id;
        
            const newRecipe = new Recipe({
                title: recipe.title,
                cook: cookID,
            })
    
            newRecipe.save().then(()=>{
                res.status(200).send("Reteta adaugata cu succes");
            }).catch((err)=>{
                console.log(err);
                res.status(400).send("Eroare la server");
            })
        }
        

    }
    


})

module.exports = router;