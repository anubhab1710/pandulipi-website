import mongoose from "mongoose";
import { LibraryModel } from "../models/library.js";

export const getLibrary = async (req, res) => {
    try {
        const books = await LibraryModel.find().sort({ _id: -1 });
        res.status(200).json({ data: books });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getLibraryBySearch = async (req, res) => {
    const { searchQuery } = req.query;

    try {
        const query = new RegExp(searchQuery, "i");
        const books = await LibraryModel.find({
            $or: [{ title: query }, { author: query }, { category: query }],
        });
        res.json({ data: books });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createLibrary = async (req, res) => {
    const book = req.body;
    const newBook = new LibraryModel({
        ...book,
        createdAt: new Date().toISOString(),
    });

    try {
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateLibrary = async (req, res) => {
    const { id } = req.params;
    const book = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No book with that id");

    const updatedBook = await LibraryModel.findByIdAndUpdate(
        id,
        { ...book, id },
        { new: true }
    );

    res.json(updatedBook);
};

export const deleteLibrary = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No book with that id!");

    await LibraryModel.findByIdAndRemove(id);

    res.json({ message: "Book deleted successfully!" });
};
