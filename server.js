// Required
const inquirer = require('inquirer');
const table = require('console.table');
const connection = require('./config/connection');
require('console.table');

startPrompt();

// Start of prompt to give user a choice
// Will move to prompts.js soon
function startPrompt() {

    inquirer
     .prompt({
         type: 'list',
         name: 'option',
         choices: [
             'Add Department',
             'Add Role',
             'Add Employee',
             'View Departments',
             'View Roles',
             'View Employees',
             'Update Employee Role(s)',
             'Quit'
         ],
         message: 'What would you like to do?'
     })
     .then(function(result) {
         console.log('You entered ' + result.option);

         switch (result.option) {
             case 'Add Department':
                 addDepartment();
                 break;
             case 'Add Role':
                 addRole();
                 break;
             case 'Add Employee':
                 addEmployee();
                 break;
             case 'View Departments':
                 viewDepartments();
                 break;
             case 'View Roles':
                 viewRoles();
                 break;
             case 'View Employees':
                 viewEmployees();
                 break;
             case 'Update Employee Role(s)':
                 updateEmployee();
                 break;
             default:
                 quit();
         }
     });
}

// Add Department
function addDepartment() {
    inquirer
     .prompt({
        type: 'input',
        message: 'What is the name of the new department?',
        name: 'deptName'
     })
    .then(function(answer){
        connection.query('INSERT INTO department (department_name) Values (?)', [answer.deptName]), function(err, res) {
            if (err) throw err;
            console.table(res)
            startPrompt();
        }
    })
};

// Add Role
function addRole() {
    inquirer
     .prompt([
     {
         type: 'input',
         message: 'What is the title of the new role?',
         name: 'roleName'
     },
     {
         type: 'input',
         message: 'What is the salary for this new role?',
         name: 'salaryTotal'
     },
     {
         type: 'input',
         message: 'What is the ID number for this role?',
         name: 'deptId'

     }
    ])
    .then(function(answer) {
        connection.query('INSERT INTO role (title, salary, department_id) VALUES (?,?,?)', [answer.roleName, answer.salaryTotal, answer.deptId], function(err, res){
            if (err) throw err;
            console.table(res);
            startPrompt();
        })
    })
};

// Add Employee
function addEmployee() {
    inquirer
     .prompt([
         {
             type: 'input',
             message: 'What is the first name of the new employee?',
             name: 'empFirstName'
         },
         {
             type: 'input',
             message: 'What is the last name of the new employee?',
             name: 'empLastName'
         },
         {
             type: 'input',
             message: 'What is the role ID number of the new employee?',
             name: 'roleId'
         },
         {
             type: 'input',
             message: 'What is the manager ID number?',
             name: 'managerId'
         }
     ])
     .then(function(answer) {
         connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', [answer.empFirstName, answer.empLastName, answer.roleId, answer.managerId], function(err, res){
            if (err) throw err;
            console.table(res);
            startPrompt();
        })
    })
};

// Update Employee
function updateEmployee() {
    inquirer
     .prompt([
         {
             type: 'input',
             message:'Which employee would you like to update?',
             name: 'empUpdate'
         },
         {
             type: 'input',
             message: 'What is the new role for the selected employee?',
             name: 'updateRole'
         }
     ])
     .then(function(answer) {
         connection.query('UPDATE employee SET role_id=? WHERE first_name=?', [answer.updateRole, answer.empUpdate], function(err, res) {
             if (err) throw err;
             console.table(res);
             startPrompt();
         })
     })
};

// View Departments
function viewDepartments() {
    let query = 'SELECT * FROM department'
    connection.query(query, function(err,res) {
        if (err) throw err;
        console.table(res);
        startPrompt();
    })
};

// View Roles
function viewRoles() {
    let query = 'SELECT * FROM role'
    connection.query(query, function(err,res) {
        if (err) throw err;
        console.table(res);
        startPrompt();
    })
};

// View Employees
function viewEmployees() {
    let query = 'SELECT * FROM employee'
    connection.query(query, function(err,res) {
        if (err) throw err;
        console.table(res);
        startPrompt();
        })
};

function quit() {
    connection.end();
    process.exit();
}