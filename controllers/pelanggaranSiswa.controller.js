// import * as jenisPelanggaranRepository from '../repositories/jenisPelanggaran.repository.js';
import * as pelanggaranSiswaRepository from '../repositories/pelanggaranSiswa.repository.js';
import { getAllSiswa } from '../repositories/siswa.repository.js';
import { getAllJenisPelanggaran } from '../repositories/jenisPelanggaran.repository.js';
/**
 * 
 * BAGIAN INI MERUPAKAN BAGIAN UTAMA DALAM KONSELING.
 * 
 */
export const PelanggaranSiswaPage = async(req,res)=>{
    try {
        const title = "Data Pelanggaran Siswa";

        const pelanggaranSiswaData = await pelanggaranSiswaRepository.getAllPelanggaranSiswa();

        console.log(pelanggaranSiswaData);
        res.render('data_pelanggaranSiswa',{
            title,
            pelanggaranSiswaData
        })
    } catch (error) {
        console.log(error)
        throw error;
    }
}


export const addPelanggaranSiswaPage = async(req,res)=>{
    try {
        const title = "Tambah Pelanggaran Siswa";

        const siswaData = await getAllSiswa();
        const jenisPelanggaranData = await getAllJenisPelanggaran();
        res.render('add_pelanggaranSiswa',{
            title,
            siswaData,
            jenisPelanggaranData

        })
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const createPelanggaranSiswaController = async(req,res)=>{
    try {
        const pelanggaranSiswaData = req.body;
        const newJenisPelanggaran = await pelanggaranSiswaRepository.createPelanggaranSiswa(pelanggaranSiswaData);
    } catch (error) {
        console.log(error);
        throw error;
    }
}