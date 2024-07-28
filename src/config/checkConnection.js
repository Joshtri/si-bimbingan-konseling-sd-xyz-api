// index.js or app.js
import db from './dbConfig.js';

// Test the database connection
const testConnection = async () => {
  try {
    await db.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();
