import mongoose from "mongoose";
import { TeamModel } from "../models/team.js";

export const getTeam = async (req, res) => {
    try {
        const team = await TeamModel.find().sort({ _id: -1 });
        res.status(200).json({ data: team });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createTeam = async (req, res) => {
    const member = req.body;
    const newMember = new TeamModel({
        ...member,
        createdAt: new Date().toISOString(),
    });

    try {
        await newMember.save();
        res.status(201).json(newMember);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateTeam = async (req, res) => {
    const { id } = req.params;
    const member = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No member with that id");

    const updatedMember = await TeamModel.findByIdAndUpdate(
        id,
        { ...member, id },
        { new: true }
    );

    res.json(updatedMember);
};

export const deleteTeam = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No member with that id!");

    await TeamModel.findByIdAndRemove(id);

    res.json({ message: "Member deleted successfully!" });
};
