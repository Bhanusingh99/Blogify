import mongoose, { Document, Schema, Types } from 'mongoose';

interface TagDocument extends Document {
    tagName: string;
    tag_related_blog: {
        totalBlogs: Types.ObjectId[]; // Array of blog IDs
    };
}

const tagSchema = new Schema<TagDocument>(
    {
        tagName: {
            type: String,
            required: true,
        },
        tag_related_blog: {
            totalBlogs: [{ type: Schema.Types.ObjectId, ref: 'BlogModel' }],
        },
    },{timestamps:true}
);

export const TagModel = mongoose.model<TagDocument>('Tags', tagSchema);
