import { getAllKelas } from "../repositories/kelas.repository.js";
import { getAllOrangTua } from "../repositories/orangTua.repository.js";
import { createSiswa, getAllSiswa } from "../repositories/siswa.repository.js";

export const siswaPage = async(req,res)=>{
    try {
        const title = "Data Siswa";

        const siswaData = await getAllSiswa();

        res.render('data_siswa',{
            title,
            siswaData
        });
    } catch (error) {
        console.error;
        throw error;
    }
};

export const addSiswaPage = async(req,res)=>{
    try {
        const title = "Tambah Data Siswa";
        const kelasData = await getAllKelas();
        const orangTuaData = await getAllOrangTua();
        res.render('add_siswa',{
            title, 
            kelasData,
            orangTuaData,
        })
    } catch (error) {
        console.log(error)
        throw error;
    }
}


export const createSiswaController = async(req,res)=>{
    try {
        const siswaData = req.body;
        const newSiswa = await createSiswa(siswaData);

        console.log(newSiswa);
        res.redirect('/adm/data/siswa')
    } catch (error) {
        console.log(error);
        throw error;
    }
}