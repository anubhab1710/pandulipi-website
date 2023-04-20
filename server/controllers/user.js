import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import { UserModel } from "../models/user.js";

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Email is not valid! " });
        }
        const existingUser = await UserModel.findOne({ email });

        if (!existingUser)
            return res.status(404).json({ message: "User doesn't exist!" });

        const isPasswordCorrect = await bcrypt.compare(
            password,
            existingUser.password
        );
        if (!isPasswordCorrect)
            return res.status(400).json({ message: "Invalid login credentials!" });

        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            "test",
            { expiresIn: "1h" }
        );
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" });
    }
};

export const signup = async (req, res) => {
    const { email, password, cpassword, name, phone, gradYear, dept } = req.body
    // const { name, email, phone, password, cpassword } = req.body;

    try {
        const existingUser = await UserModel.findOne({ email });
        if (!name || !email || !phone || !password || !cpassword || !gradYear || !dept) {
            return res.status(400).json({ message: "ALl fields must be filled! " });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Email is not valid! " });
        }
        if (phone.length !== 10) {
            return res.status(400).json({ message: "Invaid Phone Number! " });
        }
        if (password !== cpassword) {
            return res.status(400).json({ message: "Passwords don't match!" });

        }
        if (!validator.isStrongPassword(password)) {
            return res.status(400).json({ message: "Password is not strong enough! " });
        }
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });

        }


        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await UserModel.create({
            email,
            password: hashedPassword,
            name,
            phnNo: phone,
            gradYear,
            dept,
        });
        const token = jwt.sign(
            { email: result.email, id: result._id },
            "test",
            { expiresIn: "1h" }
        );
        console.log("result", result)
        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" });
    }
};
