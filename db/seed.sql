USE employee_db;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Softwear Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Vanessa", "Lira", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Abby", "Salazar", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Constantino", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Robert", "Cardenas", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Leal", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Andres", "Sanchez", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jenny", "Mora", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Nikole", "Valdez", 1, 2);

