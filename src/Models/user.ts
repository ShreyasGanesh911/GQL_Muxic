import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a user name"]
    },
    profile:{
        type:String,
        required:[true,"Please provide a profile picture"]
    },
    followers:{
        type:Number,
        default:0
    }
})

const User = mongoose.model("User",userSchema)

export default User