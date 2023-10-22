const mysql = require('mysql2')

const pool = mysql.createConnection({
    host:'34.107.84.53',
    user:'root',
    password:'99Y01m18D',
    database:'greenshop'
})

module.exports = {pool}
