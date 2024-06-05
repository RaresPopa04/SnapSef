const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: false,
    },
    instructions: {
        type: String,
        required: false,
    },
    time: {
        type: Number,
        required: false,
    },
    difficulty: {
        type: String,
        required: false,
    },
    servings: {
        type: Number,
        required: false,
    },
    rating:{
        type: Number,
        required: false,
    },
    calories:{
        type: Number,
        required: false,
    },
    image:{
        type: String,
        required: false,
    },
    fats:{
        type: Number,
        required: false,
    },
    protein:{
        type: Number,
        required: false,
    },
    carbs:{
        type: Number,
        required: false,
    },
    cook:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cook",
        required:true
    }
})

module.exports =  mongoose.model("Recipe",recipeSchema);