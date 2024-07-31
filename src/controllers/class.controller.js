// import { getAllClasses, addClass, removeClass, getClassCount } from '../services/class.services.js';

import * as classServices from '../services/class.services.js'

export const getClasses = async (req, res) => {
  try {
    const classes = await classServices.getAllClasses();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createClass = async (req, res) => {
  try {
    const newClass = await classServices.addClass(req.body);
    res.status(201).json(newClass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const deleteClass = async(req,res)=>{
  try {
    const {id_class} = req.params;
    const deletedClass = await classServices.removeClass(id_class)
    res.status(200).json(deletedClass);

  } catch (error) {
    throw error; 
  }
};

// export const deleteClass = async (req, res) => {
//   try {
//     const { id_class } = req.params;
//     const deletedClass = await removeClass(parseInt(id_class));
//     res.status(200).json(deletedClass);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// export const getTotalClasses = async (req, res) => {
//   try {
//     const totalClasses = await getClassCount();
//     res.status(200).json({ total: totalClasses });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };