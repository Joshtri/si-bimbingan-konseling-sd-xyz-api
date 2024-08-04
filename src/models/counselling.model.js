import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";
import Class from "./class.model.js";
import Student from "./student.model.js";
import User from "./user.model.js";

const Counselling = db.define("Counselling",{
    id_counselling: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    counselling_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    counselling_note: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    student_problem:{
      type: DataTypes.STRING,
      allowNull:false
    },

    solution: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    penalty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "counselling", // Adjust the table name if necessary
    timestamps: false, // Add timestamps if your table includes `createdAt` and `updatedAt`
  }
);


Class.hasMany(Counselling, {foreignKey:'classId'})
Counselling.belongsTo(Class, {foreignKey:'classId'})


User.hasMany(Counselling, {foreignKey:'userId'})
Counselling.belongsTo(User, {foreignKey:'userId'})


Student.hasMany(Counselling, {foreignKey:'studentId'})
Counselling.belongsTo(Student, {foreignKey:'studentId'})

export default Counselling;


// Singkronisasi dengan basis data
(async () => {
  try {
      await db.sync({alter:true});
      console.log("counselling table has been created.");
  } catch (error) {
      console.error("Unable to create the table:", error);
  }
})();