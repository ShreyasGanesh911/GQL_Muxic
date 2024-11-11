import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a album name"]
    },
    picture:{
        type:String,
        required:[true,"Please provide a album art cover"]
    },
    releaseDate:{
        type:Date,
        default:Date.now
    },
    artist:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Artist",
        required:[true,"Please provide artist name"]
    }

})

const Album = mongoose.model('Album',albumSchema)
export default Album