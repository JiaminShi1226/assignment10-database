-- Create the database

CREATE DATABASE assignment10;


-- Create the tables
CREATE TABLE Employee (
  employee_id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  address TEXT,
  department_id INT REFERENCES Department(department_id)
);

CREATE TABLE Department (
  department_id SERIAL PRIMARY KEY,
  name TEXT,
  location TEXT
);

CREATE TABLE Position (
  position_id SERIAL PRIMARY KEY,
  name TEXT,
  employee_id INT REFERENCES Employee(employee_id)
);

CREATE TABLE Salary (
  salary_id SERIAL PRIMARY KEY,
  amount INT,
  employee_id INT REFERENCES Employee(employee_id)
);


/*Inner join query joining two tables (Employee and Department):*/
SELECT Employee.*, Department.name AS department_name
FROM Employee
INNER JOIN Department ON Employee.department_id = Department.department_id;


/*Inner join query joining three tables (Employee, Position, and Department):*/
SELECT Employee.name, Position.name AS position_name, Department.name AS department_name
FROM Employee
INNER JOIN Position ON Employee.employee_id = Position.employee_id
INNER JOIN Department ON Employee.department_id = Department.department_id;


/*Inner join query joining all four tables (Employee, Position, Department, and Salary):*/
SELECT Employee.name, Position.name AS position_name, Department.name AS department_name, Salary.amount
FROM Employee
INNER JOIN Position ON Employee.employee_id = Position.employee_id
INNER JOIN Department ON Employee.department_id = Department.department_id
INNER JOIN Salary ON Employee.employee_id = Salary.employee_id;
