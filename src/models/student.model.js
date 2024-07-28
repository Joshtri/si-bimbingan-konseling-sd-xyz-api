import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";
import Class from "./class.model.js";
import User from "./user.model.js";

const Student = db.define('Student', {
  id_student: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nis: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthplace: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date_birth: {
    type: DataTypes.DATE,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  religion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  number_phone: {
    type: DataTypes.STRING,
    allowNull: false
  },

  classId:{
    type: DataTypes.INTEGER,
    references: {
      model: Class,
      key: 'id_class',
    },
    allowNull: false,
  },
  userId:{
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id_user',
    },
    allowNull: false,
  }
}, {});



Class.hasMany(Student, {foreignKey:'classId'})
Student.belongsTo(Class, {foreignKey:'classId'})


User.hasMany(Student, {foreignKey:'userId'})
Student.belongsTo(User, {foreignKey:'userId'})



export default Student;

// Singkronisasi dengan basis data
(async () => {
  try {
      await db.sync();
      console.log("student table has been created.");
  } catch (error) {
      console.error("Unable to create the table:", error);
  }
})();