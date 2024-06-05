const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
    servings: {
        type: Number,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
    },
    calories:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: false,
    },
    fats:{
        type: Number,
        required: true,
    },
    protein:{
        type: Number,
        required: true,
    },
    carbs:{
        type: Number,
        required: true,
    },
})

export default mongoose.model("Recipe",recipeSchema);