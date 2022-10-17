const mysql = require('mysql2');

// Connect to Database
const connection = mysql.createConnection({
    host:'localhost',
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'Your Password Here',
    database: 'employee_db'
});

connection.connect(function(err) {
    if(err) throw err;
});

module.exports = connection;