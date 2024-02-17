import mongoose,{Schema} from 'mongoose'

const followSchame = new Schema({

});

export const follow = mongoose.model("follow",followSchame);