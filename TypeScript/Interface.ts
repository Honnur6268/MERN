// Interface - 
// TypeScript interfaces define the contracts within your code. They also provide explicit names for type checking.
function getFullName(person: {firstName: string, lastName: string}){
    return `${person.firstName} ${person.lastName}`
}

const person = {
    firstName: "Honnur",
    lastName: "Ali",
    age: 26
}

const fullName = getFullName(person)
console.log(fullName)

// In this example, the TypeScript compiler checks the argument you pass into the getFullName() function.
// If the argument has two properties firstName and lastName and their types are strings, then the TypeScript compiler passes the check. 
    // Otherwise, it’ll issue an error.
// The type annotation of the function argument makes the code difficult to read. To address this issue, TypeScript introduces the concept of interfaces.
// The following uses an interface Person that has two string propertie

interface IPerson{
    firstName: string,
    lastName: string,
}

// After defining the Person interface, you can use it as a type. For example, 
// you can annotate the function parameter with the interface name:
function getFullName2(person: IPerson){
    return `${person.firstName} ${person.lastName}`
}

let employeeName = {
    firstName: "Bhavana",
    lastName: "V",
    age: 26
}

console.log("\n"+getFullName2(employeeName))

// To make the code more concise, you can use the object destructuring feature of JavaScript:
function getFullName3({firstName, lastName}: IPerson){
    return `${firstName} ${lastName}`
}

let employeeName2 = {
    firstName: "John",
    lastName: "Cena",
    age: 56
}

console.log("\n"+getFullName3(employeeName2))

// Optional properties
// An interface may have optional properties. To declare an optional property, 
// you use the question mark (?) at the end of the property name in the declaration, like this:
interface IEmployee{
    readonly _id: number,
    firstName: string,
    middleName?: string,
    lastName: string,
}
// In this example, the IEmployee interface has two required properties and one optional property.
// And the following shows how to use the IEmployee interface in the getFullName4() function:
let employeeName3 = {
    _id: 101,
    firstName: "Roman",
    lastName: "Reigns",
    middleName: "V",
    age: 38,
}
// employeeName3._id = 102;
function getFullName4(employee: IEmployee){
    // employee._id = 102 // Error: Cannot assign to '_id' because it is a read-only property.
    if(employee.middleName){
        return `${employee.firstName} ${employee.middleName} ${employee.lastName} and Id is ${employee._id}`
    }
    return `${employee.firstName} ${employee.lastName} and Id is ${employee._id}`
}

console.log("\n"+getFullName4(employeeName3))

// Function types
// To describe a function type, you assign the interface to the function signature that 
// contains the parameter list with types and returned types.
interface IEmpData{
    id: number,
    firstName: string,
    lastName: string,
    getFullName(firstName: string, lastName: string): string
}

const e: IEmpData = {
    id: 101,
    firstName: "Honnur",
    lastName: "Ali",
    getFullName(firstName: string, lastName:string){
        return `${firstName} ${lastName}`
    }
}
console.log("\n"+e.getFullName(e.firstName, e.lastName))

// Interfaces extending one interface
console.log("\n-------- Interface Extending --------")
// Suppose that you have an interface called Mailable that contains two methods called send() and queue() as follows:
interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}
// And you have many classes that already implemented the Mailable interface.
// Now, you want to add a new method to the Mailable interface that sends an email later like this:

// later(email: string, after: number): void

// However, adding the later() method to the Mailable interface would break the current code.
// To avoid this, you can create a new interface that extends the Mailable interface:
interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}

// To extend an interface, you use the extends keyword with the following syntax:
interface A {
    a(): void
}

interface B extends A {
    b(): void
}
// The interface B extends the interface A, which then has both methods a() and b() .
// Like classes, the FutureMailable interface inherits the send() and queue() methods from the Mailable interface.
class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email}. `);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}

// Interfaces extending multiple interfaces
// An interface can extend multiple interfaces, creating a combination of all the interfaces. For example:
interface C {
    c(): void
}

interface D extends B, C {
    d(): void
}
// In this example, the interface D extends the interfaces B and C. So D has all the methods of B and C interfaces, 
// which are a(), b(), and c() methods.

// Interfaces extending classes
// TypeScript allows an interface to extend a class. In this case, the interface inherits the properties and methods of the class. 
// Also, the interface can inherit the private and protected members of the class, not just the public members.
// It means that when an interface extends a class with private or protected members, 
    // the interface can only be implemented by that class or subclasses of that class from which the interface extends.
// By doing this, you restrict the usage of the interface to only classes or subclasses of the class from which the interface extends. 
// If you attempt to implement the interface from a class that is not a subclass of the class that the interface inherited, you’ll get an error. For example:

// class Control {
//     private state: boolean;
// }

// interface StatefulControl extends Control {
//     enable(): void
// }

// class Button extends Control implements StatefulControl {
//     enable() { }
// }
// class TextBox extends Control implements StatefulControl {
//     enable() { }
// }
// class Label extends Control { }


// // Error: cannot implement
// class Chart implements StatefulControl {
//     enable() { }

// }
