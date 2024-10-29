import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please provide a song name"]
    },
    picture:{
        type:String,
        required:[true,"Please provide a track picture"]

    },
    duration:{
        type:Number,
        required:[true,"Track duration not provided"]
    },
    albumId:{
        type: mongoose.Schema.Types.ObjectId,
        ref :"Album",
        required:true
    },
    artistId:{
        type: mongoose.Schema.Types.ObjectId,
        ref :"Artist",
        required:true
    }
})

const Track = mongoose.model("Track",trackSchema)

export default Track