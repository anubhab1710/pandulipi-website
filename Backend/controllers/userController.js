import { UserModel } from '../models/users.js';

export const signupUser = async (req, res) => {
    const { name, email, phone, year_of_grad, department, password, cpassword } = req.body;
    try {

        const user = await UserModel.signup(name, email, phone, year_of_grad, department, password, cpassword);
        res.status(201).json(user)

    } catch (err) {
        res.status(409).json({ error: err.message })
    }
}


export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.login(email, password);

        res.status(200).json(user);

    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}
