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
        }
    },
    { timestamps: true }
);

export const User = mongoose.model<UserDocument>('users', userSchema);
