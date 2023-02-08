import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    year_of_grad: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
})

//static signup method

userSchema.statics.signup = async function (name, email, phone, year_of_grad, department, password, cpassword) {
    if (!name || !email || !phone || !year_of_grad || !department || !password || !cpassword) {
        throw Error("All fields must be filled");
    }
    if (!validator.isEmail(email)) {
        throw Error("Email is not valid");
    }
    if (phone.length !== 10) {
        throw Error("Phone Number should be 10 numbers long")
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Password is not strong enough");
    }
    if (password !== cpassword) {
        throw Error("Password does not match");
    }

    const doesEmailExist = await this.findOne({ email });
    if (doesEmailExist) {
        throw Error("Email already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);
    const hash_cpassword = await bcrypt.hash(cpassword, salt);
    const newUser = new this({ name, email, phone, year_of_grad, department, password: hash_password, cpassword: hash_cpassword });
    const userdata = await newUser.save();

    return userdata;

}

//static login method

userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("All fields must be filled");
    }
    const userExists = await this.findOne({ email });
    if (!userExists) {
        throw Error("Invalid login details");
    }
    const comparePassword = await bcrypt.compare(password, userExists.password);
    if (!comparePassword) {
        throw Error("Invalid login credentials");
    }
    return userExists;
}



export const UserModel = mongoose.model('user', userSchema);