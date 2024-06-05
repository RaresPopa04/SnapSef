const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
        required: false,
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


cookSchema.pre('save',async function(next){
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password,salt);
        this.password = hashedPassword;
        next();
    }catch(error){
        next(error);
    }
    
})

module.exports =  mongoose.model("Cook",cookSchema);