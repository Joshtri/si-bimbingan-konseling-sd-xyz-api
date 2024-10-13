import * as siswaController from '../controllers/siswa.controller.js'
import {Router} from 'express';
const siswaRoute = Router();


siswaRoute.get('/siswa', siswaController.siswaPage);
siswaRoute.get('/add-siswa', siswaController.addSiswaPage)


siswaRoute.post('/siswa', siswaController.createSiswaController);

export default siswaRoute;