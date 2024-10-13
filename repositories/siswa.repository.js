import Siswa from "../models/siswa.model.js";



export const getAllSiswa = async()=>{
    try {
        const siswaData = await Siswa.findAll();

        return siswaData;

        // return await Siswa.findAll();
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const createSiswa = async(siswaData)=>{
    try {
        const newSiswa = await Siswa.create(siswaData);

        return newSiswa;
    } catch (error) {
        console.log(error);
        throw error;
    }
}