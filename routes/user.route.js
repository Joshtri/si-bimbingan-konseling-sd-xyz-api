import express from "express";
import { createUser, getTotal } from '../controllers/user.controller.js';

const userRoute = express.Router();


userRoute.post('/user',createUser)
userRoute.get('/total_user', getTotal);


export default userRoute;