// config/dbConfig.js
import { Sequelize } from "sequelize";
import { config } from "dotenv";
import path from "path";
import mysql2 from 'mysql2';

// Load environment variables from .env file
// config({ path: path.resolve(process.cwd(), ".env") });
config();

// const db = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   host: process.env.DB_HOST,
//   // dialect: process.env.DB_DIALECT,
//   // dialectModule: mysql2, // Gunakan mysql2 sebagai modul dialek
  
// );  
const db = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database:process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  dialectModule: mysql2, // Use mysql2 as the dialect module
});  

try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}



export default db;
