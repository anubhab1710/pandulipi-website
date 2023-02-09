import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    album: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

export const GalleryModel = mongoose.model("gallery", gallerySchema);
