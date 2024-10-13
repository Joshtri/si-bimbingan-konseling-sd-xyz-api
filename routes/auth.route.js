import express from "express";
import {  login, Me, logOut } from '../controllers/auth.controller.js';

const authRoute = express.Router();

// auth login
authRoute.post('/login', login);
authRoute.get('/me', Me);
authRoute.delete('/logout', logOut);

export default authRoute;