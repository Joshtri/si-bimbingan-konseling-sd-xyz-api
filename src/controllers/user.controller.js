import argon2 from "argon2";
import { addUser, getAllUser } from '../services/user.services.js';
import { getTotalUser } from "../repositories/user.repository.js";

export const createUser = async(req, res) =>{
    const { username, email, password, confPassword, role } = req.body;

    if (password !== confPassword) {
        return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    }

    try {
        const hashPassword = await argon2.hash(password);

        const userData = {
            username,
            email,
            password: hashPassword,
            role
        };

        const newUser = await addUser(userData);

        res.status(201).json({ msg: "Register Berhasil", user: newUser });
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const getTotal = async(req,res)=>{
    try {
        const totalUsers = await getTotalUser();
        res.status(200).json(totalUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
  }