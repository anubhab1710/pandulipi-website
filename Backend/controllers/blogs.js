import mongoose from "mongoose";
import { BlogModel } from "../models/blogs.js";

export const getBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createBlog = async (req, res) => {
    const blog = req.body;
    const newBlog = new BlogModel(blog);

    try {
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateBlog = async (req, res) => {
    const { id } = req.params;
    const blog = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No blog with that id");

    const updatedBlog = await BlogModel.findByIdAndUpdate(
        id,
        { ...blog, id },
        { new: true }
    );

    res.json(updatedBlog);
};

export const deleteBlog = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No post with that id!");

    await BlogModel.findByIdAndRemove(id);

    res.json({ message: "Blog deleted successfully!" });
};

export const likeBlog = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No blog with that id");

    const blog = await BlogModel.findById(id);
    const updatedBlog = await BlogModel.findByIdAndUpdate(
        id,
        { likeCount: blog.likeCount + 1 },
        { new: true }
    );

    res.json(updatedBlog);
};
