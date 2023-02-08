import express from "express";

import {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
    likeBlog,
} from "../controllers/blogController.js";

const blogRouter = express.Router();

blogRouter.get("/", getBlogs);
blogRouter.post("/", createBlog);
blogRouter.patch("/:id", updateBlog);
blogRouter.patch("/:id/likeBlog", likeBlog);
blogRouter.delete("/:id", deleteBlog);

export default blogRouter;
