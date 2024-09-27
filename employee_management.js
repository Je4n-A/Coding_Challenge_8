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