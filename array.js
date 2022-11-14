let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray)
console.log(myArray[2], "panjang array ini adalah", myArray.length)

// function push untuk menambahkan data ke dalam array / manipulasi array 
myArray.push(11)
console.log(myArray)

// sedangkan untuk mengeluarkan data array terakhir kita bisa menggunakan fungi pop()
myArray.pop()
console.log(myArray)

// ada juga shift() di gunakan untuk mengeluarkan data pertama dari array dan unsift() untuk menambahkan data di awal array
myArray.shift()
console.log(myArray)
myArray.unshift("ini untuk replace angka 1 pada array")
console.log(myArray)

// delete data array
delete myArray[0]
console.log(myArray)

myArray.splice(0, 1)
console.log(myArray)


// spread operator (...nama variable) 
const foods = ["nugget", "banana", "apple", "bakso ko*tl"]
console.log(foods) //output ["nugget", "banana", "apple", "bakso ko*tl"]
console.log(...foods) // output nugget banana apple bakso ko*tl

// gabung 2 array
const foods1 = ["nugget", "banana", "apple", "bakso ko*tl"]
const foods2 = ["grape", "orange", "manggo", "water melon"]
console.log(...foods1, ...foods2)

let obj1 = { nama: "rofianan", gender: "male" }
let obj2 = { hobi: "futsal" }
let newobj = { ...obj1, ...obj2 }

console.log(newobj)


