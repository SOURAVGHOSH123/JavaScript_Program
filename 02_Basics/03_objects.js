// Singleton
    // Object.create()


//object literaLS
const mynum = Symbol("key1")
const users = {
    name:"sourav",
    [mynum]:"mykey1",
    age: 34,
    url: "sourav@ybl",
    email:"sourav@email",
    isLogin:false,
    LoginDays:["monday","tuesday"],
    "Full name":"sourav ghosh"
}

// console.log(users.email)
// console.log(users["name"])
// console.log(users[mynum])
// console.log(typeof  users[mynum])

// console.log(users.Full name) //We can't acces the full name
// console.log(users["Full name"]) //We can acess though this


users.email = "suman@email"
console.log(users)
// Object.freeze(users) // You can't modify on the users object
users.email="ankita@email"
console.log(users)

users.greeting = function(){
    console.log("Hello Everyone!")
}

users.greetingTwo = function(){
    console.log(`Hello ${this.name}, How are you!`)
}

console.log(users)
console.log(users.greeting)
console.log(users.greeting())
console.log(users.greetingTwo())