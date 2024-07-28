import argon2 from "argon2";
import { addUser, getAllUser } from '../services/user.services.js';

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