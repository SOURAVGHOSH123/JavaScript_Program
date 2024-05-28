let name ="Sourav Ghosh"
let age = 23

// console.log("my name is "+ name +" and i am now "+age)
// console.log(`My name is ${name} and i am now ${age}`)


const newname = new String('soumya')
// console.log(newname[1])
// console.log(newname.length)
// console.log(newname.__proto__)
// console.log(newname.toUpperCase())
// console.log(newname.fontcolor())
// console.log(newname)
// console.log(newname.charAt(5))
// console.log(newname.indexOf("y"))

const newstring =newname.substring(1,5)
const newstring1 = newname.slice(-2,5)
// console.log(newstring)
// console.log(newstring1)

const url ="http://sourav.com/sourav%30Ghosh"

console.log(url.replace('30',"@123"))
console.log(url.includes('sourav'))
console.log(url.split('/'))
console.log(url.small())
console.log(url.endsWith('h'))