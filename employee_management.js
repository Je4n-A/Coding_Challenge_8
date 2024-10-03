// Create an Employee Class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getDetails(){
        return `Name: ${this.name}, 
        Salary: ${this.salary}, 
        Position: ${this.position}, 
        Department: ${this.department}`;
    }
};
 
// Create a Department Class

class Department {
    constructor(name,employees = []){
        this.name = name;
        this.employees = employees;
    }
    addEmployee(employee){
        this.employees.push(employee);
    }
    getDepartmentSalary(){
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }

    // Handle Bonuses for Managers
    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total, employee) => {
            if (employee instanceof Manager) {
                return total + employee.salary + employee.calculateBonus();
            } else {
                return total + employee.salary;
                }
            }, 0);
         }
};


// Create a Manager Class that Inherits From Employee

class Manager extends Employee{
    constructor(name, salary, position, department, bonus){
        super(name, salary, position, department);
        this.bonus = bonus;
    };

    getDetails() {
        return `Name: ${this.name}, 
        Salary: ${this.salary}, 
        Position: ${this.position}, 
        Department: ${this.department}, 
        Bonus: ${this.bonus}`;
    };

    calculateBonus() {
        return this.salary * this.bonus;
    };
};


// Create and Manage Departments and Employees 

class Company {
    constructor(name, departments = []) {
        this.name = name; 
        this.departments = departments;
    }
    addDepartment(department){
        this.departments.push(department);
    }
    getTotalSalary() {
        return this.departments.reduce((total, department) => total + department.getDepartmentSalary(), 0)
    }
    calculateTotalSalaryWithBonus(){
        return this.departments.reduce((total, department) => total + department.calculateTotalSalaryWithBonus(), 0)
    }
};

// Add Employees and Managers
    //Engineer department
const manager_1 = new Manager("Eric", 100000, "Engineering Manager", "Engineering", 0.2);
const employee_1 = new Employee("Rich", 80000, "Software Engineer", "Engineering");
const employee_2 = new Employee("Ray", 65000, "Junior Sofware Engineer", "Engineering");
    //Sales department 
const manager_2 = new Manager("David", 120000, "Sales Manager", "Sales", 0.15);
const employee_3 = new Employee("Eve", 60000, "Sales Representative", "Sales");
const employee_4 = new Employee("Frank", 65000, "Sales Representative", "Sales");

// Add now the Departments 
const engineering = new Department("Engineering");
engineering.addEmployee(manager_1);
engineering.addEmployee(employee_1);
engineering.addEmployee(employee_2);

const sales = new Department("Sales");
sales.addEmployee(manager_2);
sales.addEmployee(employee_3);
sales.addEmployee(employee_4);

// Add company and its department structure
const company = new Company("JMA Enterprises");
company.addDepartment(engineering);
company.addDepartment(sales);

console.log(`Engineering Department Manager: ${engineering.employees.find(emp => emp instanceof Manager).getDetails()}`);
console.log(`Engineering Department Employees:`);
engineering.employees.forEach(emp => console.log(emp.getDetails()));
console.log(`Engineering Department Salary: ${engineering.getDepartmentSalary()}`);
console.log(`Engineering Department Salary with Bonuses: ${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`***************************`);
console.log(`Sales Department Manager: ${sales.employees.find(emp => emp instanceof Manager).getDetails()}`);
console.log(`Sales Department Employees:`);
sales.employees.forEach(emp => console.log(emp.getDetails()));
console.log(`Sales Department Salary: ${sales.getDepartmentSalary()}`);
console.log(`Sales Department Salary with Bonuses: ${sales.calculateTotalSalaryWithBonus()}`);