import express from "express";
import { getCounselling, createCounselling, deleteCounselling  } from '../controllers/counselling.controller.js';

const counsellingRoute = express.Router();


counsellingRoute.get('/counselling',getCounselling)
counsellingRoute.post('/counselling',createCounselling)
counsellingRoute.delete('/counselling/:id_counselling', deleteCounselling);

export default counsellingRoute;