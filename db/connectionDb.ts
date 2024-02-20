import mongoose from "mongoose";

export const connectionToDb = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("mongoDb is connected")
    } catch (error) {
        console.log(error)
        throw error
    }
}
