import Kelas from "../models/kelas.model.js";

export const createKelas = async(kelasData)=>{
    try {
        const newKelas = await Kelas.create(kelasData);
        return newKelas;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getAllKelas = async()=>{
    try {
        
        const kelasData = await Kelas.findAll();
        return kelasData;

    } catch (error) {
        console.log(error);
        throw error;
    }
}



