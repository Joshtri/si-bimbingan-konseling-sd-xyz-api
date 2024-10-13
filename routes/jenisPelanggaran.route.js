import {Router} from 'express';
import * as jenisPelanggaranController from '../controllers/jenisPelanggaran.controller.js';
const jenisPelanggaranRoute = Router();



jenisPelanggaranRoute.get('/jenis-pelanggaran', jenisPelanggaranController.jenisPelanggaranPage)
jenisPelanggaranRoute.post('/jenis-pelanggaran', jenisPelanggaranController.createjenisPelanggaranController)
jenisPelanggaranRoute.put('/jenis-pelanggaran/:id', jenisPelanggaranController.updatejenisPelanggaranController)
jenisPelanggaranRoute.delete('/jenis-pelanggaran/:id', jenisPelanggaranController.deletejenisPelanggaranController)
// jenisPelanggaranRoute.get('/add-jenis-pelanggaran', jenisPelanggaranController.addJenisPelanggaranPage)


export default jenisPelanggaranRoute;