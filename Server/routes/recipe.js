const express = require("express")
const router = express.Router();
const Recipe = require("../models/Recipe");
const Cook = require("../models/Cook");
const jwt = require("jsonwebtoken");
const {authCookMiddleWare} = require("../includes/verifyPermission");
const dotenv = require("dotenv");
dotenv.config();

router.get("/", async (req,res)=>{
    const recipes = await Recipe.find({});
    if(!recipes || recipes.length == 0){
        res.status(400).send("Nu sunt retete")
    }
    return res.status(200).json(recipes);
})

router.post("/newRecipe",authCookMiddleWare, async (req,res)=>{
    const recipe  = req.body

    
    const cook = await Cook.findOne({username:req.user.username});
    const cookID = cook._id;

    const newRecipe = new Recipe({
        title: recipe.title,
        cook: cookID,
    })

    newRecipe.save().then(()=>{
        return res.status(200).send("Reteta adaugata cu succes");
    }).catch((err)=>{
        console.log(err);
        return res.status(400).send("Eroare la server");
    })

})
router.put("/edit/:id",authCookMiddleWare, async (req,res)=>{
    
    const recipe = req.body;
    const cookFound = await Cook.findOne({username:req.user.username});
    if(!cookFound) return res.status(400).send("Bucatarul nu mai exista");
    const recipeId = req.params.id;
    const newRecipe = await Recipe.findByIdAndUpdate({_id:recipeId,cook:cookFound._id},{
        title: recipe.title,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        time: recipe.time,
        difficulty: recipe.difficulty,
        servings: recipe.servings,
        rating: recipe.rating,
        calories: recipe.calories,
        image: recipe.image,
        fats: recipe.fats,
        protein: recipe.protein,
        carbs: recipe.carbs,

    })

    if(!newRecipe) return res.status(400).send("Reteta nu exista");
    return res.status(200).send("Reteta actualizata cu succes");
    
})


router.delete("/delete/:id",authCookMiddleWare, async (req,res)=>{

    const cookFound = await Cook.findOne({username:req.user.username});
    if(!cookFound)  return  res.status(400).send("Bucatarul nu mai exista");
    const recipeId = req.params.id;
    const newRecipe = await Recipe.findByIdAndDelete({_id:recipeId,cook:cookFound._id});

    if(!newRecipe) return res.status(400).send("Reteta nu exista");
    return res.status(200).send("Reteta stearsa cu succes");
        
    
})

module.exports = router;