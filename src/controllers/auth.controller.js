// src/controllers/authController.js


import argon2 from 'argon2';
import User from '../models/user.model.js';



export const login = async (req, res) =>{
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    const match = await argon2.verify(user.password, req.body.password);
    if(!match) return res.status(400).json({msg: "Wrong Password"});
    req.session.userId = user.uuid;
    const uuid = user.uuid;
    const username = user.username;
    const email = user.email;
    const role = user.role;
    res.status(200).json({uuid, username, email, role});
}


// export const logOut = (req, res) =>{
//     req.session.destroy((err)=>{
//         if(err) return res.status(400).json({msg: "Tidak dapat logout"});
//         res.status(200).json({msg: "Anda telah logout"});
//     });
// }