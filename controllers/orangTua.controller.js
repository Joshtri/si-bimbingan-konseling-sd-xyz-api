import { getAllOrangTua , createOrangTua} from "../repositories/orangTua.repository.js";


export const orangTuaPage = async(req,res)=>{
    try {

        const title = "Data Orang Tua";

        const orangTuaData = await getAllOrangTua();
        res.render('data_orangTua',{
            title,
            orangTuaData
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const addOrangTuaPage = async (req,res)=>{
    try {
        const title = "Tambah Orang Tua Siswa";
        res.render('add_orangTua',{
            title
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const createOrangTuaController = async(req,res)=>{
    try {
        const orangTuaData = req.body;
        const newOrangTua = await createOrangTua(orangTuaData);

        console.log({newOrangTua});
        res.redirect('/adm/data/orang-tua')
    } catch (error) {
        console.log(error);
        throw error;
    }
}