// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

import Class from "../models/class.model.js";

export const getClass = async()=>{
    try {
        const classData = await Class.findAll();
        return classData;

    } catch (error) {
        throw error;
    }
};


export const createClass = async(classData)=>{
    try {
        return await Class.create(classData)
    } catch (error) {
        throw error;
    }
};

export const deleteClass = async(id_class)=>{
    try {
        return await Class.destroy({ where:{
                id_class
            }
        });
    } catch (error) {
        throw error;
    }
}



// export const getTotalClass = async()=>{
//     try {
//         const totalClass = await prisma.class.count();

//         return totalClass;
//     } catch (error) {
//         throw error;
//     }
    
// };