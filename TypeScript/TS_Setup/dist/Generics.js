"use strict";
// Generics - 
// he identity function is a function that will return back whatever is passed in. You can think of this in a similar way to the echo command.
// Without generics, we would either have to give the identity function a specific type:
function identity(args) {
    return args;
}
// Or, we could describe the identity function using the any type:
function identityOne(args) {
    return args;
}
// While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg, 
// we actually are losing the information about what that type was when the function returns. If we passed in a number, 
// the only information we have is that any type could be returned.
// Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. 
// Here, we will use a type variable, a special kind of variable that works on types rather than values.
function identityTwo(args) {
    return args;
}
// We’ve now added a type variable Type to the identity function. This Type allows us to capture the type the user provides (e.g. number), 
// so that we can use that information later. Here, we use Type again as the return type. On inspection, we can now see the same type 
// is used for the argument and the return type. 
// Once we’ve written the generic identity function, we can call it in one of two ways. 
// The first way is to pass all of the arguments, including the type argument, to the function:
let output = identityTwo("Hello Generics");
console.log(output);
// Here we explicitly set Type to be string as one of the arguments to the function call, denoted using the <> 
// around the arguments rather than ().
// The second way is also perhaps the most common. Here we use type argument inference — that is, we want the compiler to set the 
// value of Type for us automatically based on the type of the argument we pass in:4
let op = identityTwo("Hello Generics - 2nd way");
console.log(op);
let o = identityTwo(123);
console.log(o);
// Generic Type Variables
// function to work on arrays of Type rather than Type directly
function loggingIdentity(arg) {
    let num = 3;
    return arg[num];
}
function loggingIdentityTwo(arg) {
    return arg;
}
function loggingIdentityThree(arg) {
    return arg;
}
// The type of generic functions is just like those of non-generic functions, with the type parameters listed first, 
// similarly to function declarations:
function identityFour(arg) {
    return arg;
}
let myIdentity = identityFour;
const l = (products) => {
    return products[1];
};
//   Generic functions with multiple types
function connect(val1, val2) {
    return {
        val1,
        val2
    };
}
function connectDb(val1, val2) {
    return {
        val1,
        val2
    };
}
connectDb(1, 1);
function connDb(val1, val2) {
    return {
        val1,
        val2
    };
}
const db = {
    connectionUrl: "",
    username: "Honnur",
    password: "6268"
};
connDb("Connectiing To", db);
