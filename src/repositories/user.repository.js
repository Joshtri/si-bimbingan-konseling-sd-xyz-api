import User from "../models/user.model.js";


export const createUser = async(userData)=>{
    try {
        return await User.create(userData);
    } catch (error) {
        throw error;
    }
};


export const getUser = async()=>{
    try {
        return await User.findAll();
    } catch (error) {
        throw error;
    }
}


// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

