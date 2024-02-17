import mongoose,{Schema} from 'mongoose'

const userSchame = new Schema({

});

export const User = mongoose.model("users",userSchame);