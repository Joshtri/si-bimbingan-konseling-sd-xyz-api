import * as indexController from '../controllers/index.controller.js'
import {Router} from 'express';
const indexRoute = Router();


indexRoute.get('/', indexController.loginPage);



export default indexRoute;