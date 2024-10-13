import { Router } from "express";
import * as orangTuaController from '../controllers/orangTua.controller.js';
const orangTuaRoute = Router();



orangTuaRoute.get('/orang-tua',orangTuaController.orangTuaPage);
orangTuaRoute.get('/add-orang-tua', orangTuaController.addOrangTuaPage);
orangTuaRoute.post('/orang-tua', orangTuaController.createOrangTuaController);

export default orangTuaRoute;