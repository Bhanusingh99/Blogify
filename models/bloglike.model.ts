import mongoose,{Schema} from 'mongoose'

const blogLike = new Schema({

});

export const blogLike = mongoose.model("blogLikes",blogLike);