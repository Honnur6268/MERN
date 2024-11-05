let data: string = "Hello World, Welcome to TS";
console.log(data)

// let h1 = document.createElement("h1")
// h1.textContent = data

// document.body.appendChild(h1)


// TS Types 
// Primitive Type
let empName : string = "Honnur Ali"
let age : number = 26
let isDeveloper : boolean = true

// empName = 123 // --> Error: Type 'number' is not assignable to type 'string'.
// age = "25" // --> Error: Type 'string' is not assignable to type 'number'.
// isDeveloper = "Yes" // --> Error: Type 'string' is not assignable to type 'boolean'.
// isDeveloper = 1 // --> Error: Type 'number' is not assignable to type 'boolean'.

// Type infer - Having TypeScript "guess" the type of a value is called infer.
let emp = "Honnur" // TS guesses emp as string based on value
// emp = 12 // --> Error: Type 'number' is not assignable to type 'string'.

// Objects
let employee: {
    name: string;
    age: number;

}

employee = {
    name: 'Honnur',
    age: 25
}
console.log(employee)

// employee2: employee = { 
//     name: 'Honnur',
//     age: "25"  //Type 'string' is not assignable to type 'number'
// }

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };

// Array Type
let arrName : string [] = [] // Only accepts array of strings
arrName = ["Honnur", "Bhavana","Zoya","Raju"]
arrName.push("Kumar")
console.log(arrName)
// arrName = [1, "Rani"] // --> Error: Type 'number' is not assignable to type 'string'.

// The readonly keyword can prevent arrays from being changed.
const names: readonly string[] = ["Dylan"];
// names = ["Jhon"] // Error: Cannot assign to 'names' because it is a constant.
// names.push("Jhon") // --> Error: Property 'push' does not exist on type 'readonly string[]'

// Type - any : can be any type
let v : any = 123;
v = "can be string"
v = true
v = {
    name: "Hello",
    address: "Gvt",
    pinCode: 583227
}
v = function(){
    return "Hello"
}

console.log(v())

console.log("\--------- UNKNOWN -----------")
// Unknown Type:
let result: unknown;
result = 1
result = "Hello TS"
result = true
result = [10, 20, 300]
result = {name: "Jhon"}

// Unlike the any type, TypeScript checks the type before performing operations on it. 
// For example, you cannot call a method or apply an operator on a unknown value. 
// If you attempt to do so, the TypeScript compiler will issue an error:
result = [10, 30, 40]
// Gives Error
// const total = result.reduce((a: number, b:number ) => a + b, 0);
// console.log(total);
// In the above example, the result variable has the type of unknown. We assign an array the result value, 
// but its type is still unknown. Therefore, we cannot call the reduce() method of an array on it.

// you need to use the type assertion to explicitly tell the TypeScript compiler that the type of the result is array. 
const total = (result as number[]).reduce((a: number, b: number) => a + b, 0);
console.log(total); // 6

console.log("\n--------- NEVER -----------")
// Type - never
// let empty: never = 'hello'; // --> Error: Type 'string' is not assignable to type 'never'.
type Role = 'admin' | 'user' | 'guest';

const unknownRole = (role: never): never => {
  throw new Error(`Invalid role: ${role}`);
};

const authorize = (role: Role): string => {
  switch (role) {
    case 'admin':
      return 'You can do anything';
    case 'user':
      return 'You can do something';
    case 'guest':
      return 'You can do nothing';
    default:
      // never reach here util we add a new role
      return unknownRole(role);
  }
};

console.log(authorize('guest'));

console.log("\n--------- TUPLE -----------")
// Tuple - A tuple is a typed array with a pre-defined length and types for each index.
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'tuple'];

console.log(ourTuple)

// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.
// ourTuple = [true, "tuple", 12] // --. Gives Error

// We have no type safety in our tuple for indexes 3+
// new valueTuples only have strongly defined types for the initial values:
ourTuple.push("Hello")

let ourTuple2: readonly [number, boolean, string] = [5, false, 'tuple'];
// ourTuple2.push("Hi") // --> Error: Property 'push' does not exist on type 'readonly [number, boolean, string]'.

console.log(ourTuple)


console.log("\n--------- ENUM ---------")
// Enum Types
// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:
enum CardinalDirections {
    North,
    East,
    South,
    West
  }
  let currentDirection = CardinalDirections.North;
  // logs 0
  console.log(currentDirection);

// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:
enum CardinalDirections2{
    North = 1,
    East,
    South,
    West
  }
  // logs 1
  console.log(CardinalDirections2.North);
  // logs 4
  console.log(CardinalDirections2.West);

// String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
enum CardinalDirections3 {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  // logs "North"
  console.log(CardinalDirections3.North);
  // logs "West"
  console.log(CardinalDirections3.West);

  enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

function isItSummer(month: Month) {
    let isSummer: boolean;
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
  let isSummer = isItSummer(4)
  if(isSummer){
    console.log("Current is a Summer Season")
  }
  else{
    console.log("Current is not a Summer Season")
  }


// Void Type:
function log(message: string | number): void {
    console.log(message);
}

log("Enjoy, TS!!")
log(2)



console.log("\n--------- UNION TYPE -----------")
// Union Type
let res: number | string;
res = 10; // OK
res = 'Hi'; // also OK
// res = false; // Error: a boolean value, not OK

function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

let sum = add(10, 50)
let str = add("Hello ", "TS")
console.log("Sum is:",sum)
console.log(str)

console.log("\n--------- TYPE ALIASES -----------")
// Type Aliases - Type Aliases allow defining types with a custom name (an Alias).
// 1. Primitive types
type Name = string;
let firstName: Name = "Honnur"
let lastName: Name = "Ali"
console.log(firstName, lastName)

// 2. Objetc Type
type Person = {
    firstName: string
    lastName: string
    age: number
}

const user: Person = {
    firstName: 'Honnur',
    lastName: "Ali",
    age: 26
}
console.log(user)

// Union Type
type alphanumeric = string | number;

let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
// input = false; // Compiler error