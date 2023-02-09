import express from "express";

import {
    getBlogsBySearch,
    getBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog,
    likeBlog,
    commentBlog,
} from "../controllers/blogs.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/search", getBlogsBySearch);
router.get("/", getBlogs);
router.get("/:id", getBlog);

router.post("/", auth, createBlog);
router.patch("/:id", auth, updateBlog);
router.delete("/:id", auth, deleteBlog);
router.patch("/:id/likeBlog", auth, likeBlog);
router.post("/:id/commentBlog", auth, commentBlog);

export default router;
