// Interface - 
// TypeScript interfaces define the contracts within your code. They also provide explicit names for type checking.
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Honnur",
    lastName: "Ali",
    age: 26
};
var fullName = getFullName(person);
console.log(fullName);
// After defining the Person interface, you can use it as a type. For example, 
// you can annotate the function parameter with the interface name:
function getFullName2(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var empName = {
    firstName: "Honnur",
    lastName: "Ali",
};
