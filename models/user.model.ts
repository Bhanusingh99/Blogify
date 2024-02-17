import mongoose, { Document, Schema } from 'mongoose';

interface UserDocument extends Document {
    username: string;
    email: string;
    password: string;
    bio?: string;
    profile_picture?: string;
    is_active?: boolean;
}

const userSchema = new Schema<UserDocument>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
        },
        profile_picture: {
            type: String,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

export const UserModel = mongoose.model<UserDocument>('users', userSchema);
