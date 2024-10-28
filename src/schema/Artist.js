import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a artist name"]
    },
    profile:{
        type:String,
        required:[true,"Please provide a artist name"]
    },
    followers:{
        type:Number,
        default:0
    }
})

const Artist= mongoose.model("artist",artistSchema)

export default Artist