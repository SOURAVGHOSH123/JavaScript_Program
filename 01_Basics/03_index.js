// let score = 332;
// let score = "332";
// let score = "332abd";
// let score = null;
// let score;
// let score = true;
// let score = "sourav";
// console.log(typeof score)
// console.log(score)

// let valueNum = Number(score) // convert to number
// console.log(typeof valueNum)
// console.log(valueNum)

/* 
"332"  => 332
"332abd" => NaN
"sourav" => NaN
"NULL" => 0
true => 1;false => 1;
undefined => NaN
*/



// let tryval = 1;
// let tryval = 0;
// let tryval = "";
// let tryval ="hitesh";
// let convert_boolean = Boolean(tryval);
// console.log(convert_boolean);

/* 
1 => true
0 => false
"" => false
undefined => false
"hitesh" => true
*/



// let names = 45;
// let names = "ram";
// let names = "";
// let names = true;
let names;
let convert_string =String(names);
// console.log(typeof convert_string)
// console.log(convert_string)

/* 
all data type are easily converted into String
33 => 33(string)
"ram" => "ram"(string)
undefined = undefined(string)
null =   (string)
true/false => true/false(string)
*/

//***************************operations*********************************

let value1 = 3;
let naga_value = -value1;
// console.log(naga_value)
let value2 = 5;

// console.log(value1 + value2)
// console.log(value1 - value2)
// console.log(value1 % value2)
/*
console.log("1"+2+2)
console.log(3 +2+"4")
console.log(+true) // tricky conversion
console.log(value1 + true) // tricky conversion
console.log(true+) // no use of tricky conversion
console.log(+"")  // tricky conversion
*/

let num1,num2,num3;
num1 = num2 = num3 = (4+5);
// console.log(num1)

let gameCounter = 100;
// gameCounter++ //postfix operator
++gameCounter    //prefix operator
// console.log(gameCounter) // both are not same

let x = 3;
const y = x++;  // postfix operator
console.log("a:",x,"y:",y);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;  //prefix operator
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
