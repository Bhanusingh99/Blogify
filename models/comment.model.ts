import mongoose, { Document, Schema, Types } from 'mongoose';

interface CommentDocument extends Document {
    blog_id: Types.ObjectId;
    user_id: Types.ObjectId;
    content: string;
    parent_id?: Types.ObjectId;
    created_at?: Date;
    commentLike: number;
}

const commentSchema = new Schema<CommentDocument>(
    {
        blog_id: {
            type: Schema.Types.ObjectId,
            ref: 'BlogModel',
            required: true,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        parent_id: {
            type: Schema.Types.ObjectId,
            ref: 'CommentModel',
        },
        created_at: {
            type: Date,
            default: Date.now,
        },
        commentLike: {
            type: Number,
            default: 0,
        },
    },{timestamps:true}
);

export const CommentModel = mongoose.model<CommentDocument>('comments', commentSchema);
