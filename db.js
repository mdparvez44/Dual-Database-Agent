const mongoose = require('mongoose');
const mysql = require('mysql2/promise');
require('dotenv').config();

// MongoDB Setup
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const mongo = mongoose.connection;
mongo.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongo.once('open', () => console.log('✅ MongoDB connected!'));

// MySQL Setup
const mysqlConnection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
});

module.exports = { mongoose, mysqlConnection };