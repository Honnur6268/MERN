"use strict";
// Classes - 
// TypeScript Access Modifiers : 
// 1. private - The private modifier limits the visibility to the same class only. 
// 2. public - The public modifier allows class properties and methods to be accessible from all locations.
// --> If don't specify public then ts will by default consider as a public
// 3. protected - The protected modifier allows properties and methods of a class to be accessible within the same class and subclasses.
// readonly - TypeScript provides the readonly modifier that allows you to mark the properties of a class immutable.
// The assignment to a readonly property can only occur in one of two places:
// In the property declaration.
// In the constructor of the same class.
class User {
    constructor(firstName, lastName, salary, dept) {
        this.role = "SDE";
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.dept = dept;
    }
    // 2nd way
    // To make the code shorter, TypeScript allows you to both declare properties and initialize them in the constructor like this:
    // constructor(public firstName: string, public lastName: string){} // Advanced declaration
    //getter and setters
    // getter - A getter method returns the value of the property’s value. A getter is also called an accessor.
    get getSalary() {
        return this.salary;
    }
    // setter - A setter method updates the property’s value. A setter is also known as a mutator.
    set setSalary(salary) {
        this.salary = salary;
    }
    changeSalary(salary) {
        return this.salary + salary + 1000;
    }
}
// const emp = new User("Honnur", "Ali", 10000, "IT")
// console.log(emp)
// emp.role = "SDE2" // we can access but we can't change the value because its readonly
// emp.salary // we can't access private variable outside of class
// emp.dept // Property 'dept' is protected and only accessible within class 'User' and its subclasses.
// let sal = emp.getSalary
// console.log(sal)
// emp.setSalary = 20000
// console.log(emp)
class Employee extends User {
    constructor(firstName, lastName, salary, dept) {
        super(firstName, lastName, salary, dept);
        this.isEmployee = true;
    }
    changeDept(dept) {
        this.dept = dept;
    }
    // Method Overriding - Redefining the method of parent class to its own method
    changeSalary(salary) {
        return this.getSalary + salary + 2000;
    }
}
console.log("\n---------- Parent ----------");
let oldEmp = new User("Honnur", "Ali", 30000, "IT");
oldEmp.setSalary = oldEmp.changeSalary(10000);
console.log(oldEmp);
console.log("\n---------- Child ----------");
let newEmp = new Employee("Honnur", "Ali", 30000, "IT");
// console.log(newEmp)
// console.log(newEmp.getSalary)
// newEmp.setSalary = 40000
newEmp.changeDept("DEV");
newEmp.setSalary = newEmp.changeSalary(10000);
console.log(newEmp);
