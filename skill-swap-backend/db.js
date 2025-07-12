// db.js

// Load environment variables from .env file
require('dotenv').config();

const mysql = require('mysql2');

// Create MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,       // e.g., 'localhost'
  user: process.env.DB_USER,       // e.g., 'root'
  password: process.env.DB_PASSWORD, // your MySQL password
  database: process.env.DB_NAME    // e.g., 'skill_swap'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err.message);
    return;
  }
  console.log('✅ MySQL Connected!');
});

// Export for use in other files
module.exports = db;
