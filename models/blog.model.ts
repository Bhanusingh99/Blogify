import mongoose, { Document, Schema, Types } from 'mongoose';

interface BlogDocument extends Document {
    title: string;
    slug: string;
    description?: string;
    content: string;
    author: Types.ObjectId | string; // Assuming User model has ObjectId as _id
    published: boolean;
    tags?: string;
    likes?: Types.ObjectId[]; // Array of user IDs who liked the blog
}

const blogSchema = new Schema<BlogDocument>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        content: {
            type: String,
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        published: {
            type: Boolean,
            default: false,
        },
        tags: {
            type: String,
            trim: true,
        },
        likes: {
            type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
            default: [],
        },
    },
    { timestamps: true }
);

export const BlogModel = mongoose.model<BlogDocument>('blogtags', blogSchema);
