import mongoose,{Schema} from 'mongoose'

const commentLikeSchame = new Schema({

});

export const commentLikes = mongoose.model("commentLikes",commentLikeSchame);