import express from "express";

import {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
    likeBlog,
} from "../controllers/blogs.js";

const router = express.Router();

router.get("/", getBlogs);
router.post("/", createBlog);
router.patch("/:id", updateBlog);
router.patch("/:id/likeBlog", likeBlog);
router.delete("/:id", deleteBlog);

export default router;
