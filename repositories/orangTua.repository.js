import OrangTua from "../models/orangTua.model.js";

export const getAllOrangTua = async()=>{
    try {
        return await OrangTua.findAll();
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const createOrangTua = async(orangTuaData)=>{
    try {
        const newOrangTua = await OrangTua.create(orangTuaData);

        return newOrangTua;
    } catch (error) {
        console.log(error);
        throw error;
    }
}