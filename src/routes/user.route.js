import express from "express";
import { createUser  } from '../controllers/user.controller.js';

const userRoute = express.Router();


userRoute.post('/user',createUser)


export default userRoute;