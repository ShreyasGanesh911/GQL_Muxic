import mongoose from "mongoose";
import 'dotenv/config'

const URI = process.env.MONGO_URI || ""
const connection = async()=>{
    await mongoose.connect(URI).then(()=>console.log("connected to database!")).catch((e)=>console.log("Error in connecting to database",e))
}

export default connection