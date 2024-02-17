import mongoose from "mongoose";

const myVariable: string | undefined = process.env.MONGODB_URL;
export const createCOnnection = async () => {
    try {
        await mongoose.connect(`${myVariable}`)
        console.log('Mongo db is connected')
    } catch (error) {
        console.log(error)
        throw error
    }
}