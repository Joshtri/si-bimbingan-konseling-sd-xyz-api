import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";

const Class = db.define("Class",{
    id_class: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    class_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);


export default Class;


// Singkronisasi dengan basis data
(async () => {
  try {
      await db.sync();
      console.log("class table has been created.");
  } catch (error) {
      console.error("Unable to create the table:", error);
  }
})();