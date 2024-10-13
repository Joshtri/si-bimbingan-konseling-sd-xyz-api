import {Router} from 'express';
import * as kelasController from '../controllers/kelas.controller.js';
const kelasRoute = Router();


kelasRoute.get('/kelas', kelasController.kelasPage);
kelasRoute.get('/add-kelas', kelasController.addKelasPage);
kelasRoute.post('/kelas', kelasController.createKelas);


export default kelasRoute;