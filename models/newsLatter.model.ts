import mongoose, { Document, Schema } from 'mongoose';

interface NewsLetterDocument extends Document {
    email: string;
}

const newsLetterSchema = new Schema<NewsLetterDocument>(
    {
        email: {
            type: String,
            required: true,
        },
    },{timestamps:true}
);

export const NewsLetterEmailModel = mongoose.model<NewsLetterDocument>('newsLatterEmail', newsLetterSchema);
