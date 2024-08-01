import express from "express";
import { getStudents, createStudent, getStudentById  } from '../controllers/student.controller.js';

const studentRoute = express.Router();


studentRoute.get('/student',getStudents)
studentRoute.post('/student',createStudent)
studentRoute.get('/student/:id_student', getStudentById)


export default studentRoute;