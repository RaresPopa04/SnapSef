const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
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