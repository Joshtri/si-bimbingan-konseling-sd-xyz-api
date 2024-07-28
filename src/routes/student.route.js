import express from "express";
import { getStudents, createStudent  } from '../controllers/student.controller.js';

const studentRoute = express.Router();


studentRoute.get('/student',getStudents)
studentRoute.post('/student',createStudent)


export default studentRoute;