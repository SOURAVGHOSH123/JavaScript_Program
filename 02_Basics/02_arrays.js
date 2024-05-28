array1 = ["so","ru","si","hi"]
array2= ["q1","e4","5y","y7"]

array2.push(array1)
// console.log(array2)
// console.log(array2[4][2])


// let all_array = myArray.concat(myArray2)
let all_array = [...myArray, ...myArray2]
// console.log(all_array)

 let another_array = [1, 2, 3, [4, 5, 6],7,[6, 7,[4, 5]]]
another_real_array = another_array.flat(Infinity)
 console.log(another_real_array)



 console.log(Array.isArray("sourav"))
 console.log(Array.from("sourav"))
 console.log(Array.from({name:"sourav"})) // Interesting

 let score1 = 100;
 let scored2 = 200;
 let scored3 = 300;

 All_array = Array.of(score1, scored2, scored3)
 console.log(All_array)