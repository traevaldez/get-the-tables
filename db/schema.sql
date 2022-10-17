/* DROP DATABASE AND TABLES IF THEY EXIST TO REMAKE DATABASE*/

DROP DATABASE IF EXISTS employee_db;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NULL,
    salary DECIMAL(10.3) NULL,
    department_id INT NULL,
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NULL,
    last_name VARCHAR(50) NULL,
    role_id INT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);