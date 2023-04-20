import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    allTags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    comments: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

export const BlogModel = mongoose.model("blogs", blogSchema);
