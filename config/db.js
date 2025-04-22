const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    connectionString: process.env.DATABASE_URL 
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to PostgreSQL DB!');
});

module.exports = connection;
