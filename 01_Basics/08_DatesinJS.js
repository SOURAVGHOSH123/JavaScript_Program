const mydate = new Date()

// console.log(typeof mydate)
// console.log(mydate)
// console.log(mydate.getDay())
// console.log(mydate.getTime())
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())


// let mynew_date = new Date(2024, 4, 24, 5, 6)
// let mynew_date = new Date("2015-04-25")
let mynew_date = new Date("03-26-2023")


// console.log(mynew_date)
// console.log(mynew_date.toDateString())
// console.log(mynew_date.toLocaleString())
// console.log(mynew_date.getTime())

let mytimestamp = Date.now()
//  console.log(mytimestamp)
//  console.log(Math.floor(mytimestamp/1000))

let newdate = new Date()
console.log(newdate)
console.log(newdate.getMonth()+1)
console.log(`Now the time is ${newdate.getHours()}`)
newdate.toLocaleString('default',{
    weekday:'long',
    
})