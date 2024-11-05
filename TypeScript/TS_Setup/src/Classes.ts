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
    // 1st way
    public firstName: string
    lastName: string 
    private salary: number // we can access only within this class
    readonly role: string = "SDE"
    protected dept: string // accessible within class 'User' and its subclasses.

    constructor(firstName: string, lastName: string, salary: number, dept: string){
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary
        this.dept = dept
    }

    // 2nd way
    // To make the code shorter, TypeScript allows you to both declare properties and initialize them in the constructor like this:
    // constructor(public firstName: string, public lastName: string){} // Advanced declaration

    //getter and setters

    // getter - A getter method returns the value of the property’s value. A getter is also called an accessor.
    get getSalary(): number{
        return this.salary;
    }

    // setter - A setter method updates the property’s value. A setter is also known as a mutator.
    set setSalary(salary: number){
        this.salary = salary
    }

    changeSalary(salary: number): number{
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

class Employee extends User{
    isEmployee: boolean = true
    
    constructor(firstName: string, lastName: string, salary: number, dept: string){
        super(firstName, lastName, salary, dept)
    }

    changeDept(dept: string){
        this.dept = dept
    }

    // Method Overriding - Redefining the method of parent class to its own method
    changeSalary(salary: number): number {
        return this.getSalary + salary + 2000;
    }
}

console.log("\n---------- Parent ----------")
let oldEmp = new User("Honnur", "Ali", 30000, "IT");
oldEmp.setSalary = oldEmp.changeSalary(10000)
console.log(oldEmp)

console.log("\n---------- Child ----------")
let newEmp = new Employee("Honnur", "Ali", 30000, "IT")
// console.log(newEmp)
// console.log(newEmp.getSalary)
// newEmp.setSalary = 40000
newEmp.changeDept("DEV")
newEmp.setSalary = newEmp.changeSalary(10000)
console.log(newEmp)


