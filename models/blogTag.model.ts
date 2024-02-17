import mongoose,{Schema} from 'mongoose'

const blogTagSchame = new Schema({

});

export const blogTags = mongoose.model("blogtags",blogTagSchame);