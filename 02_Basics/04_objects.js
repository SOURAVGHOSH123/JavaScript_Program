// const tinder = new Object()
const tinderuser = {}
tinderuser.id="242"
tinderuser.name="sourav"
tinderuser.isLoggedIn= false


// console.log(tinderuser)

const regularuser = {
    email:"someone@gmail.com",
    fullname:{
        username:{
        firstname:"soumya",
        lastname:"ghosh"
        }
    }
}

// console.log(regularuser.fullname.username.lastname)


const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}
// const obj3 = {obj1, obj2}

//newobj = Object.assign(terget,resource1,resource2) where terget == newobj
// const obj3 = Object.assign(obj1, obj2) 
// console.log(obj1)
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2) // terget = {}
const obj3 = {...obj1, ...obj2}

// console.log(obj1)
// console.log(obj3)


const multiobject = [
    {
        id: 20242,
        email: "sourav@email"
    },
    {
        id: 20243,
        email: "suman@email"
    },
    {
        id: 20247,
        email: "priti@email"
    }
]

// console.log(multiobject[2].email)

// Aditional information
// console.log(tinderuser)
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// console.log(tinderuser.hasOwnProperty('isLoggedIn'))


const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructer: "sourav"
}

// console.log(course.courseInstructer)
// const {courseInstructer} = course; // Object de- structure
const {courseInstructer: instructer} = course;
console.log(instructer)


/*
// JSON datas Example
{
    "name" : "sourav",
    "price" : "6758",
    "course" : "JavaScript"
}
// Multiple JSON data objects in array
[
    {},
    {),
    {}
] // Avoid such error
*/


/*
   https://randomuser.me/api/     // link for JSON dataset example
   https://jsonformatter.org/     // JSON dataset formatter
*/