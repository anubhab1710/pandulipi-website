import express from "express";

import {
    getGallery,
    likeGallery,
    createGallery,
    updateGallery,
    deleteGallery,
} from "../controllers/gallery.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getGallery);
router.patch("/:id/likeGallery", auth, likeGallery);
router.post("/", createGallery);
router.patch("/:id", updateGallery);
router.delete("/:id", deleteGallery);

export default router;
