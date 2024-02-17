import mongoose,{Schema} from 'mongoose'

const blogSchame = new Schema({

});

export const blog = mongoose.model("blogtags",blogSchame);