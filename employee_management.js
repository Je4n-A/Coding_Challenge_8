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
}

const employee = new Employee("John", 50000, "Design", "Marketing");
console.log (employee.getDetails());

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
}

const department = new Department("Marketing");
department.addEmployee(employee);
console.log(`Department Salary ${department.getDepartmentSalary()}`);