import express from "express";
import { getStudents, createStudent, getStudentById  } from '../controllers/student.controller.js';
import { getTotalStudent } from "../repositories/student.repository.js";

const studentRoute = express.Router();


studentRoute.get('/student',getStudents)
studentRoute.post('/student',createStudent)
studentRoute.get('/student/:id_student', getStudentById)
studentRoute.get('/total_student', getTotalStudent)

export default studentRoute;