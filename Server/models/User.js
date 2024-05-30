const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    email:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:1024
    }
}
)

userSchema.pre('save',async function(next){
    try {
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(this.password,salt);
        this.password = pass;
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
})


module.exports = mongoose.model("User",userSchema);