import JenisPelanggaran from "../models/jenisPelanggaran.model.js";

export const createJenisPelanggaran = async(jenisPelanggaranData)=>{
    try {
        const newJenisPelanggaran = await JenisPelanggaran.create(jenisPelanggaranData);
        return newJenisPelanggaran;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getAllJenisPelanggaran = async()=>{
    try {
        
        const jenisPelanggaranData = await JenisPelanggaran.findAll();
        return jenisPelanggaranData;

    } catch (error) {
        console.log(error);
        throw error;
    }
}



