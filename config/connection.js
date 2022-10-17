const mysql = require('mysql2');

// Connect to Database
const connection = mysql.createConnection({
    host:'localhost',
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: '@Pp137r33!x',
    database: 'employee_db'
});

connection.connect(function(err) {
    if(err) throw err;
});

module.exports = connection;