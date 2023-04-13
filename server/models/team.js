import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    name: String,
    category: String,
    role: String,
    about: String,
    selectedFile: String,
    links: {
        facebook: String,
        instagram: String,
        linkedin: String,
        github: String,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

export const TeamModel = mongoose.model("team", teamSchema);
