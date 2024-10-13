
import PelanggaranSiswa from '../models/pelanggaranSiswa.model.js';
import Siswa from '../models/siswa.model.js';
import jenisPelanggaran from '../models/jenisPelanggaran.model.js';

export const getAllPelanggaranSiswa = async () => {
    try {
      const pelanggaranSiswa = await PelanggaranSiswa.findAll({
        include: [
          {
            model: Siswa,
            attributes: ['nama_siswa'],
          },
          {
            model: jenisPelanggaran,
            attributes: ['nama_pelanggaran'],
          },
        ],
      });
  
      // Log the data to see the output and structure
      console.log(JSON.stringify(pelanggaranSiswa, null, 2));
  
      return pelanggaranSiswa;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
export const createPelanggaranSiswa = async(pelanggaranSiswaData)=>{
    try {
        const newPelanggaranSiswa = await PelanggaranSiswa.create(pelanggaranSiswaData);
        return newPelanggaranSiswa;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const deletePelanggarSiswa = async(id_pelanggaran_siswa)=>{
    try {
        return await PelanggaranSiswa.destroy({
            where:{
                id_pelanggaran_siswa
            }
        })
    } catch (error) {   
        console.log(error);
        throw error;        
    }
}