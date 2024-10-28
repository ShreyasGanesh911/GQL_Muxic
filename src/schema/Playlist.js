import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide playlist name']
    },
    tracks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Track',
        
    }]
})

const PlayList = mongoose.model("playList",playlistSchema)

export default PlayList