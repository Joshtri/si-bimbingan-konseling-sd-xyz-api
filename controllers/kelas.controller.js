import * as kelasRepository from '../repositories/kelas.repository.js';



export const kelasPage = async(req,res)=>{
    try {
        const title = "Data Kelas";

        const kelasData = await kelasRepository.getAllKelas();

        res.render('data_kelas',{
            title,
            kelasData
        })
    } catch (error) {
        console.log(error);
        throw error
    }
}


export const addKelasPage = async(req,res)=>{
    try {
        const title = "Add Kelas";

        res.render('add_kelas',{
            title
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const createKelas = async(req,res)=>{
    try {
        const kelasData = req.body;
        const newKelas = await kelasRepository.createKelas(kelasData);

        res.redirect('/adm/data/kelas');
    } catch (error) {
        console.log(error);
        throw error;
    }
}