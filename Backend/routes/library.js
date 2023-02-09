import express from "express";

import {
    getLibraryBySearch,
    getLibrary,
    createLibrary,
    updateLibrary,
    deleteLibrary,
} from "../controllers/library.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/search", auth, getLibraryBySearch);
router.get("/", auth, getLibrary);
router.post("/", createLibrary);
router.patch("/:id", updateLibrary);
router.delete("/:id", deleteLibrary);

export default router;
