import mongoose from "mongoose";
import { GalleryModel } from "../models/gallery.js";

export const getGallery = async (req, res) => {
    const { album, page } = req.query;

    try {
        const LIMIT = 16;
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await GalleryModel.find({
            album: { $in: album },
        }).countDocuments({});

        const gallery = await GalleryModel.find({ album: { $in: album } })
            .sort({ _id: -1 })
            .limit(LIMIT)
            .skip(startIndex);
        res.status(200).json({
            data: gallery,
            currentPage: Number(page),
            numberOfPages: Math.ceil(total / LIMIT),
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const likeGallery = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) return res.json({ message: "Unauthenticated!" });

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No gallery image with that id");

    const gallery = await GalleryModel.findById(id);
    const index = gallery.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
        gallery.likes.push(req.userId);
    } else {
        gallery.likes = gallery.likes.filter((id) => id !== String(req.userId));
    }
    const updatedGallery = await GalleryModel.findByIdAndUpdate(id, gallery, {
        new: true,
    });

    res.json(updatedGallery);
};

export const createGallery = async (req, res) => {
    const gallery = req.body;
    const newGallery = new GalleryModel({
        ...gallery,
        createdAt: new Date().toISOString(),
    });

    try {
        await newGallery.save();
        res.status(201).json(newGallery);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateGallery = async (req, res) => {
    const { id } = req.params;
    const gallery = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No gallery image with that id");

    const updatedGallery = await GalleryModel.findByIdAndUpdate(
        id,
        { ...gallery, id },
        { new: true }
    );

    res.json(updatedGallery);
};

export const deleteGallery = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No gallery image with that id!");

    await GalleryModel.findByIdAndRemove(id);

    res.json({ message: "Gallery image deleted successfully!" });
};
