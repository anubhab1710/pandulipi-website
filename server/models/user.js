import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },
    phnNo: { type: Number, required: true },
    gradYear: { type: Number, required: true },
    dept: { type: String, required: true },
});

export const UserModel = mongoose.model("users", userSchema);
