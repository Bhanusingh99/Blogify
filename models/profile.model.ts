import mongoose, { Schema, Document, Types } from "mongoose";

interface IProfile extends Document {
    bio?: string;
    userId: Types.ObjectId;
    avatar: string;
    blogs: Types.ObjectId[];
}

const profileSchema: Schema<IProfile> = new Schema({
    bio: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    avatar: {
        type: String,
        required: [true, "Avatar is required"]
    },
    blogs: [
        {
            type: Schema.Types.ObjectId,
            ref: "BlogModel"
        }
    ]
});

export const ProfileModel = mongoose.models.ProfileModel as mongoose.Model<IProfile> || mongoose.model<IProfile>("ProfileModel", profileSchema);
