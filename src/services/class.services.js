// import { getClass, createClass, deleteClass, getTotalClass } from '../repositories/class.repository.js';
import * as classRepository from '../repositories/class.repository.js';


export const getAllClasses = async () => {
  try {
    const classes = await classRepository.getClass();
    return classes;
  } catch (error) {
    throw new Error('Error fetching classes: ' + error.message);
  }
};

export const addClass = async (classData) => {
  try {
    const newClass = await classRepository.createClass(classData);
    return newClass;
  } catch (error) {
    throw new Error('Error creating class: ' + error.message);
  }
};

// export const removeClass = async (id_class) => {
//   try {
//     const deletedClass = await deleteClass(id_class);
//     return deletedClass;
//   } catch (error) {
//     throw new Error('Error deleting class: ' + error.message);
//   }
// };

// export const getClassCount = async () => {
//   try {
//     const totalClasses = await getTotalClass();
//     return totalClasses;
//   } catch (error) {
//     throw new Error('Error getting class count: ' + error.message);
//   }
// };