import {Router} from 'express';
import * as dashboardController  from '../controllers/dashboard.controller.js'
const dashboardRoute = Router();



dashboardRoute.get('/my/dashboard', dashboardController.dashboardPage);



export default dashboardRoute;



