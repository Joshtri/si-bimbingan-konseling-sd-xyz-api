import * as jenisPelanggaranRepository from '../repositories/jenisPelanggaran.repository.js';
import JenisPelanggaran from '../models/jenisPelanggaran.model.js'; 

export const jenisPelanggaranPage = async (req, res) => {
    try {
        const title = "Data Jenis Pelanggaran";
        const jenisPelanggaranData = await jenisPelanggaranRepository.getAllJenisPelanggaran();
        res.render('data_jenisPelanggaran', {
            title,
            jenisPelanggaranData
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const addjenisPelanggaranPage = async (req, res) => {
    try {
        const title = "Tambah Jenis Pelanggaran";
        res.render('add_jenisPelanggaran', {
            title
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const getAlljenisPelanggaran = async (req, res) => {
    try {
        const jenisPelanggaran = await JenisPelanggaran.findAll(); 
        res.status(200).json(jenisPelanggaran);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatejenisPelanggaranController = async (req, res) => {
    try {
        const { id_jenis_pelanggaran } = req.params;
        const { nama_pelanggaran, keterangan_pelanggaran, poin_pelanggaran } = req.body;

        const updatedjenisPelanggaran = await JenisPelanggaran.update(
            { nama_pelanggaran, keterangan_pelanggaran, poin_pelanggaran },
            { where: { id_jenis_pelanggaran } }
        );

        if (updatedjenisPelanggaran[0] === 1) {
            res.status(200).json({ message: 'Data updated successfully' });
        } else {
            res.status(404).json({ message: 'Jenis pelanggaran not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createjenisPelanggaranController = async (req, res) => {
    try {
        const jenisPelanggaranData = req.body;
        const newjenisPelanggaran = await jenisPelanggaranRepository.createJenisPelanggaran(jenisPelanggaranData);
        res.status(201).json({ message: 'Jenis pelanggaran created successfully', data: newjenisPelanggaran });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const deletejenisPelanggaranController = async (req, res) => {
    try {
        const id = req.params;

        let id_jenis_pelanggaran = id;

        console.log('memperoleh id ke : ' +  id_jenis_pelanggaran);
        
        const deleted = await JenisPelanggaran.destroy({
            where: { 
                id_jenis_pelanggaran
             }
        });

        if (deleted) {
            res.status(200).json({ message: 'Data deleted successfully' });
        } else {
            res.status(404).json({ message: 'Jenis pelanggaran not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};