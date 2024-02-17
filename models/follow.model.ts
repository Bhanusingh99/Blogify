import mongoose,{Schema} from 'mongoose'

const followSchame = new Schema({
    following_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      follower_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      }
},{timestamps:true});

export const follow = mongoose.model("follow",followSchame);