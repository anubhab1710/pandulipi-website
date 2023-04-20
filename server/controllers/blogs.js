import mongoose from "mongoose";
import { BlogModel } from "../models/blogs.js";

export const getBlogs = async (req, res) => {
    const { page } = req.query;

    try {
        const LIMIT = 12;
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await BlogModel.countDocuments({});

        const blogs = await BlogModel.find()
            .sort({ _id: -1 })
            .limit(LIMIT)
            .skip(startIndex);
        res.status(200).json({
            data: blogs,
            currentPage: Number(page),
            numberOfPages: Math.ceil(total / LIMIT),
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getBlog = async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await BlogModel.findById(id);
        res.status(200).json(blog);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getBlogsBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");
        const blogs = await BlogModel.find({
            $or: [{ title }, { tags: { $in: tags.split(",") } }],
        });
        res.json({ data: blogs });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createBlog = async (req, res) => {
    const blog = req.body;
    console.log(blog);
    const newBlog = new BlogModel({
        ...blog,
        creator: req.userId,
        createdAt: new Date().toISOString(),
    });

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

    if (!req.userId) return res.json({ message: "Unauthenticated!" });

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No blog with that id");

    const blog = await BlogModel.findById(id);
    const index = blog.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
        blog.likes.push(req.userId);
    } else {
        blog.likes = blog.likes.filter((id) => id !== String(req.userId));
    }
    const updatedBlog = await BlogModel.findByIdAndUpdate(id, blog, {
        new: true,
    });

    res.json(updatedBlog);
};

export const commentBlog = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    const blog = await BlogModel.findById(id);

    blog.comments.push(value);
    const updatedBlog = await BlogModel.findByIdAndUpdate(id, blog, {
        new: true,
    });

    res.json(updatedBlog);
};
