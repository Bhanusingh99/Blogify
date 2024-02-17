import mongoose,{Schema} from 'mongoose'

const tagSchame = new Schema({

});

export const tag = mongoose.model("Tags",tagSchame);