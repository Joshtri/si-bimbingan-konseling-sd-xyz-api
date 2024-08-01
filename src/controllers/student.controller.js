import * as studentServices from '../services/student.services.js'

export const getStudents = async (req, res) => {
  try {
    const students = await studentServices.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {
  try {
    const newStudent = await studentServices.addStudent(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getStudentById = async(req,res)=>{
  try {
    const {id_student} = req.params;
    const student = await studentServices.getById(id_student)
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
}