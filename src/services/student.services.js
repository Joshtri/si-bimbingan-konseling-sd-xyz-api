import * as studentRepository from '../repositories/student.repository.js';


export const getAllStudents = async () => {
  try {
    const students = await studentRepository.getStudent();
    return students;
  } catch (error) {
    throw new Error('Error fetching students: ' + error.message);
  }
};

export const addStudent = async (studentData) => {
  try {
    const newStudent = await studentRepository.createStudent(studentData);
    return newStudent;
  } catch (error) {
    throw new Error('Error creating student: ' + error.message);
  }
};
