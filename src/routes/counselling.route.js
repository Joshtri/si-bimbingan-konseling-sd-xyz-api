import express from "express";
import { getCounselling, createCounselling  } from '../controllers/counselling.controller.js';

const counsellingRoute = express.Router();


counsellingRoute.get('/counselling',getCounselling)
counsellingRoute.post('/counselling',createCounselling)


export default counsellingRoute;