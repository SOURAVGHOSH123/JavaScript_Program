// Two type of data type
// (1) Primitive

// 7 type: Number, String, Boolean, Null, Undefined, Symbol, BigInt

const score= 100;
const scores = 1000.3;
const name1 = "sourav";
const isOk = false;
const isFull = null;
let value1 = undefined;
let value2 = Symbol('100')
let value3 = Symbol('100')
const bigNumbervalue = 77490312735797n;

// console.log(value2 == value3)
// console.log(typeof bigNumbervalue)
// console.log(typeof isFull)
// console.log(typeof scores)


// (2) Reference / Non-primitive

// Array, Objects, Functions

const heros=["saktiman","doger","naagraj"]
let student ={
    name:"sourav",
    age:54
}
const myfunction = function(){
    console.log("Hello")
}

// console.log(typeof myfunction)
// console.log(typeof student)
// console.log(typeof heros)



// ************************************************************

// stack (Primitive), Heap(Non-primitive)

let myCode = "Sourav Ghosh"
let codeValue = myCode
codeValue = "Soumy Ghosh";

console.log(myCode)
console.log(codeValue)


let user1 ={
    email:"user@gmail",
    upi:"user@ybl"
}

let user2 =user1;
user2.upi = "user2@ybl"
console.log(user1)
