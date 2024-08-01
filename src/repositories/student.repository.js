import Student from '../models/student.model.js';


export const getStudent = async()=>{
    try {
        return await Student.findAll();
    } catch (error) {
        throw error;
    }
}


export const createStudent = async(studentClass)=>{
    try {
        return await Student.create(studentClass);
    } catch (error) {
        throw error;
    }
}


export const getStudentById = async(id_student)=>{
    try {
        return await Student.findByPk(id_student)
    } catch (error) {
        throw error;
    }
}