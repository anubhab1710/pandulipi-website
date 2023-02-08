import express from 'express'
// import { signupUser, loginUser } from '../controllers/';
import { signupUser, loginUser } from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.get('/login', loginUser);
userRouter.post('/signup', signupUser);

export default userRouter;
