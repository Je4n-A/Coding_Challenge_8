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

// Create a Manager Class that Inherits From Employee

class Manager extends Employee{
    constructor(name, salary, position, department, bonus){
        super(name,salary,position,department);
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
}
    const manager = new Manager("Ruth", 80000, "Lead Engineer", "Engineering", 2)
    console.log (`Manager: ${manager.getDetails()}`);  
    console.log(`BONUS: ${manager.calculateBonus()}`);

// Handle Bonuses for Managers

class Department {
    constructor(name, employees = []) {
        this.name = name;
        this.employees = employees;
}
addEmployee(employee) {
    this.employees.push(employee);
}
getDepartmentSalary() {
    return this.employees.reduce((total, employee) => total + employee.salary, 0);
}
calculateTotalSalaryWithBonus() {
    return this.employees.reduce((total, employee) => {
        if (employee instanceof Manager) {
            return total + employee.salary + employee.calculateBonus();
        } else {
            return total + employee.salary;
        }
    }, 0);
}
}
console.log(department.calculateTotalSalaryWithBonus());

