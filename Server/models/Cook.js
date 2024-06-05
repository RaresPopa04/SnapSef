const mongoose = require("mongoose");

const cookSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    description:{
        type: String,
        required: false,
    },
    rating:{
        type: Number,
        required: true,
    },
    followers:{
        type: Number,
        required: false,
    },
    recipes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Recipe",
            required: false,
        }
    ]
})

export default mongoose.model("Cook",cookSchema);