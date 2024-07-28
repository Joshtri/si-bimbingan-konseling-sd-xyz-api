import express from "express";
import { createClass, getClasses } from '../controllers/class.controller.js';

const classRoute = express.Router();

// Get all classes
classRoute.get('/class', getClasses);

// // Create a new class
classRoute.post('/class', createClass);

// // Delete a class
// classRoute.delete('/class/:id_class', deleteClass);

// // Get total number of classes
// classRoute.get('/class/count', getTotalClasses);

export default classRoute;