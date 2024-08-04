import express from "express";
import { getStudents, createStudent, getStudentById, getTotal  } from '../controllers/student.controller.js';

const studentRoute = express.Router();


studentRoute.get('/student',getStudents)
studentRoute.post('/student',createStudent)
studentRoute.get('/student/:id_student', getStudentById)
studentRoute.get('/total_student', getTotal)

export default studentRoute;