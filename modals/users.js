const mongoose = require("mongoose");
const userSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ],
    prod:[ mongoose.Schema.Types.ObjectId]

})

const User = mongoose.model('User',userSchema);
module.exports = User;
