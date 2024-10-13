// config/dbConfig.js
import { Sequelize } from "sequelize";
import { config } from "dotenv";
import mysql2 from 'mysql2';

// Load environment variables from .env file
config();

const db = new Sequelize({
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'nada26',
  database: process.env.DB_NAME || 'db_si_konseling',
  dialect: 'mysql',          // Set dialect explicitly to MySQL
  dialectModule: mysql2,      // Use mysql2 as the dialect module
  port: process.env.DB_PORT || 3308, // Port for MySQL, default to 3306
  logging: false              // Optional: turn off logging SQL queries
});

async function connectDB() {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connectDB();  // Call the function to connect to the database

export default db;
