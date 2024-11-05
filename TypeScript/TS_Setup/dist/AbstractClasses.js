"use strict";
// Abstract Class - 
// An abstract class is typically used to define common behaviors for derived classes to extend. 
// Unlike a regular class, an abstract class cannot be instantiated directly.
// Abstract classes cannot be instantiated.
// An Abstract class has at least one abstract method.
// To use an abstract class, you need to inherit it and provide the implementation for the abstract methods.
// To declare an abstract class, you use the abstract keyword:
class AbsClass {
    // name: string
    // addree: string
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    changeName(name) {
        return this.name = name;
    }
}
class ChildClass extends AbsClass {
    constructor(name, address, mobileNumber) {
        super(name, address);
        this.mobileNumber = mobileNumber;
    }
    changeAddress(address) {
        this.address = address;
        return this.address;
    }
}
// let abs = new AbsClass() // Cannot create an instance of an abstract class.
let child = new ChildClass("Honnur Ali", "Bangalore", "8123426862");
console.log(child);
child.changeAddress("BTM Layout");
console.log(child);
child.changeName("Honnur");
console.log(child);
