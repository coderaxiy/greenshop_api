const mysql = require('mysql2')

const pool = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'99Y01m18D',
    database:'greenshop',
    connectTimeout: 86400000,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})


module.exports = { pool }
