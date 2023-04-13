import mongoose from "mongoose";

const librarySchema = new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    rating: String,
    price: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

export const LibraryModel = mongoose.model("library", librarySchema);
