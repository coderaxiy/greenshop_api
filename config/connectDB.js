const mysql = require('mysql2')
require('dotenv').config();

const pool = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database:process.env.MYSQL_DATABASE,
    port: process.env.DB_PORT,
    // connectTimeout: 86400000,
    // waitForConnections: true,
    connectionLimit: 10,
    // queueLimit: 0
})


module.exports = { pool }
