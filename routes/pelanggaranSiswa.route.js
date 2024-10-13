import {Router} from 'express';
import PelanggaranSiswa from '../models/pelanggaranSiswa.model.js'
import * as pelanggaranSiswaController from '../controllers/pelanggaranSiswa.controller.js';
const pelanggaranSiswaRoute = Router();


pelanggaranSiswaRoute.get('/pelanggaran-siswa', pelanggaranSiswaController.PelanggaranSiswaPage);
pelanggaranSiswaRoute.get('/add-pelanggaran-siswa', pelanggaranSiswaController.addPelanggaranSiswaPage);
// Create a new PelanggaranSiswa
pelanggaranSiswaRoute.post("/pelanggaran-siswa", async (req, res) => {
    try {
        const { siswaId, jenisPelanggaranId, tanggal_pelanggaran, tanggal_konseling, status_konseling, tindak_lanjut, konselor, catatan_konseling } = req.body;
        if (!siswaId || !jenisPelanggaranId || !tanggal_pelanggaran || !catatan_konseling) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const pelanggaranSiswa = await PelanggaranSiswa.create({
            siswaId,
            jenisPelanggaranId,
            tanggal_pelanggaran,
            tanggal_konseling,
            status_konseling,
            tindak_lanjut,
            konselor,
            catatan_konseling
        });
        // res.status(201).json(pelanggaranSiswa);
        res.redirect('/adm/data/pelanggaran-siswa')
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// pelanggaranSiswaRoute.post('/kelas', kelasController.createKelas);


export default pelanggaranSiswaRoute;