var employees = [];

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full-Time";
    
    this.printEmployeeForm = function() {
        console.log("Name: " + name + ", Job Title: " + jobTitle + 
                    ", Salaray: " + salary + ", Status: " + status);
    }
}

var employee2 = new Employee("Bob", "V School Instructor", "$3000/hour", "Full-time")
var employee3 = new Employee("Jim", "V School Instructor", "$3000/hour", "Full-time")
var employee4 = new Employee("Joe", "V School Instructor", "$3000/hour", "Full-time")
console.log(employee2);
console.log(employee3);
console.log(employee4);
console.log("\n");

employee3.status = "Contract";
console.log(employee3);
console.log("\n\n");

employee2.printEmployeeForm();
employee3.printEmployeeForm();
employee4.printEmployeeForm();
console.log("\n\n");

employees.push(employee2);
employees.push(employee3);
employees.push(employee4);

console.log(employees);