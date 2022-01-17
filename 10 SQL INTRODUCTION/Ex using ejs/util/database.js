const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'ex',
    password: 'welcome123'
});

module.exports = pool.promise();