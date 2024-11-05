var data = "Hello World, Welcome to TS";
console.log(data);
// let h1 = document.createElement("h1")
// h1.textContent = data
// document.body.appendChild(h1)
// TS Types 
// Primitive Type
var empName = "Honnur Ali";
var age = 26;
var isDeveloper = true;
// empName = 123 // --> Error: Type 'number' is not assignable to type 'string'.
// age = "25" // --> Error: Type 'string' is not assignable to type 'number'.
// isDeveloper = "Yes" // --> Error: Type 'string' is not assignable to type 'boolean'.
// isDeveloper = 1 // --> Error: Type 'number' is not assignable to type 'boolean'.
// Type infer - Having TypeScript "guess" the type of a value is called infer.
var emp = "Honnur"; // TS guesses emp as string based on value
// emp = 12 // --> Error: Type 'number' is not assignable to type 'string'.
// Objects
var employee;
employee = {
    name: 'Honnur',
    age: 25
};
console.log(employee);
// employee2: employee = { 
//     name: 'Honnur',
//     age: "25"  //Type 'string' is not assignable to type 'number'
// }
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
// Array Type
var arrName = []; // Only accepts array of strings
arrName = ["Honnur", "Bhavana", "Zoya", "Raju"];
arrName.push("Kumar");
console.log(arrName);
// arrName = [1, "Rani"] // --> Error: Type 'number' is not assignable to type 'string'.
// The readonly keyword can prevent arrays from being changed.
var names = ["Dylan"];
// names = ["Jhon"] // Error: Cannot assign to 'names' because it is a constant.
// names.push("Jhon") // --> Error: Property 'push' does not exist on type 'readonly string[]'
// Type - any : can be any type
var v = 123;
v = "can be string";
v = true;
v = {
    name: "Hello",
    address: "Gvt",
    pinCode: 583227
};
v = function () {
    return "Hello";
};
console.log(v());
// Type - unknown
// Type - never
// Tuple - A tuple is a typed array with a pre-defined length and types for each index.
var ourTuple;
ourTuple = [5, false, 'tuple'];
console.log(ourTuple);
// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.
// ourTuple = [true, "tuple", 12] // --. Gives Error
// We have no type safety in our tuple for indexes 3+
// new valueTuples only have strongly defined types for the initial values:
ourTuple.push("Hello");
var ourTuple2 = [5, false, 'tuple'];
// ourTuple2.push("Hi") // --> Error: Property 'push' does not exist on type 'readonly [number, boolean, string]'.
console.log(ourTuple);
console.log("\n--------- ENUM ---------");
// Enum Types
// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2[CardinalDirections2["North"] = 1] = "North";
    CardinalDirections2[CardinalDirections2["East"] = 2] = "East";
    CardinalDirections2[CardinalDirections2["South"] = 3] = "South";
    CardinalDirections2[CardinalDirections2["West"] = 4] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {}));
// logs 1
console.log(CardinalDirections2.North);
// logs 4
console.log(CardinalDirections2.West);
// String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
var CardinalDirections3;
(function (CardinalDirections3) {
    CardinalDirections3["North"] = "North";
    CardinalDirections3["East"] = "East";
    CardinalDirections3["South"] = "South";
    CardinalDirections3["West"] = "West";
})(CardinalDirections3 || (CardinalDirections3 = {}));
;
// logs "North"
console.log(CardinalDirections3.North);
// logs "West"
console.log(CardinalDirections3.West);
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
function isItSummer(month) {
    var isSummer;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
//   let isSummer = isItSummer(Month.Jul)
var isSummer = isItSummer(4);
if (isSummer) {
    console.log("Current is a Summer Season");
}
else {
    console.log("Current is not a Summer Season");
}
