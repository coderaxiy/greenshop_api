const mysql = require('mysql2')

const pool = mysql.createConnection({
    host:'13.53.182.108',
    user:'root',
    password:'99Y01m18D',
    database:'greenshop'
})

module.exports = {pool}
