// //1. print every number in an array
//  const numbers =[5, 10 , 15, 20 , 25];

//  numbers.forEach(function(number){
//     console.log(number)
//  });

//  //2. Print every name in an array.

const names = ["Alice", "Bob", "Charlie", "David"];

names.forEach(function(name){
    console.log(name)
});

// //3. Print each fruit in uppercase.

const fruits = ["apple", "banana", "orange"]

fruits.forEach(function(fruit){
    console.log(fruit.toUpperCase())
});

// 4.Find the sum of all numbers.

const numbers = [2, 4, 6, 8, 10];
let sum = 0
numbers.forEach(function(number){
        sum =sum + number

console.log(sum)
})

//5.Count how many items are in the array using a foreach loop
let toys = ["car", "truck" , "balls" , "ballons" ]
let count = 0

toys.forEach(function(toy){
    count ++;
})
    console.log("Number of items = ", count)

