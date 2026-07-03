// //1. print every number in an array
//  const numbers =[5, 10 , 15, 20 , 25];

//  numbers.forEach(function(number){
//     console.log(number)
//  });

//  //2. Print every name in an array.

// const names = ["Alice", "Bob", "Charlie", "David"];

// names.forEach(function(name){
//     console.log(name)
// });

// // //3. Print each fruit in uppercase.

// const fruits = ["apple", "banana", "orange"]

// fruits.forEach(function(fruit){
//     console.log(fruit.toUpperCase())
// });

// // 4.Find the sum of all numbers.

// const numbers = [2, 4, 6, 8, 10];
// let sum = 0
// numbers.forEach(function(number){
//         sum =sum + number

// console.log(sum)
// })

// //5.Count how many items are in the array using a foreach loop
// let toys = ["car", "truck" , "balls" , "ballons" ]
// let count = 0

// toys.forEach(function(toy){
//     count ++;
// })
//     console.log("Number of items = ", count)

    //6. Find the largest number in an array.

// const num1 = [12, 45, 7, 89, 23];
// let largest = numbers[0]

// num1.forEach(function(num1){
// if(num1 > largest){
//     largest = num1
// }

// })
//  console.log( largest)

//7.Count how many numbers are even.
// const num2 = [1, 2, 3, 4, 5, 6, 7, 8];

// let count = 0;

// num2.forEach(function(num2) {
//     if (num2 % 2 === 0) {
//         count++;
//     }
// });

// console.log(count);

//8. Print only names that start with the letter "A".

// const names = ["Alice", "Bob", "Andrew", "Charlie", "Amy"];

// names.forEach(function(name) {
//     if (name.startsWith("A")) {
//         console.log(name);
//     }
// });

// //9. Count how many vowels are in an array of letters.

// const letters = ["a", "b", "e", "g", "i", "o", "u"];
// let count = 0
// letters.forEach(function(letter){
// if(

// letter ==="a"||
// letter ==="e"||
// letter ==="i"||
// letter ==="o"||
// letter ==="u"
//   ){  count++

//   }

// })
// console.log(count)


// //10. Create a new array where each number is doubled

// const numbers = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]
// let doubledNumber = []

// numbers.forEach(function(number){
// doubledNumber = (number*2)
// })
// console.log(doubledNumber)

//  //11.Calculate the average of all numbers in an array.
// const numbers = [1, 2, 3, 4, 5]
// let sum = 0


//  numbers.forEach(function(number){
//     sum += number


// })
//     let average = sum / numbers.length

//  console.log(average)
 

//  //12 .
//  const words=["cat", "elephant", "dog", "giraffe"]
//  let longestWord = [0]

// words.forEach(function(word){

//     if(word.length > longestWord.length){
//         longestWord = word
//     }
// })
// console.log(longestWord)

// //13. Count how many students passed (mark ≥ 50).



// const marks = [34, 56, 78, 45, 90, 50];

// let passedCount = 0;

// marks.forEach(function(mark) {
//     if (mark >= 50) {
//         passedCount++;
//     }
// });

// console.log(passedCount);

// //14.

// const numbers = [1, 2, 3, 2, 4, 5, 1];

// const seen = [];

// numbers.forEach(number => {
//     if (seen.includes(number)) {
//         console.log(number);
//     } else {
//         seen.push(number);
//     }
// });


// //15.

// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const counts = {};

// words.forEach(word => {
//     if (counts[word]) {
//         counts[word]++;
//     } else {
//         counts[word] = 1;
//     }
// });

//console.log(counts);

//A security guard checking people entering a building
// let peopleEntering = 1

// while(peopleEntering <= 5){
//     console.log ("You may enter")
//     peopleEntering ++
// }
// let number = 1

// while (number <= 100){
//     console.log(number)
//     number++
// }

// let pin = "";

// do {
//     pin = prompt("Enter your PIN");
// } while (pin !== "1234");

// console.log("Welcome!");


// let age;

// do {
//     age = Number(prompt("Enter your age"));
// } while (age < 0);

// if (age >= 18) {
//     console.log("You are eligible to vote.");
    

// } else {
//     console.log("You are not eligible to vote.");

// }

// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("Munashe");

// // Multiple parameters

// function add(a, b) {
//     console.log(a + b);
// }
// add(5, 3);



// let fruits = ["apple", "banana", "orange"];
// for(const fruit of fruits){
//     console.log(fruit)
// }






// function  greet (name){
//     console.log("Hello " + name)
// }
// greet("Munashe")
// greet("Tinashe")

// function calculateTotal(a, b){
//     console.log(a + b)
// }
// calculateTotal(5, 10);
// calculateTotal(20, 30);

// Function expression
// const login = function(){
//     console.log("user login")
// }
// login();

//arrow function
//const logout = () => {
//     console.log("user logout");
// };
// logout();

// with parameters
// const add = (a, b) => {
//     return a + b;}

//     console.log(add(5, 10));//

// //anonymous function
// button.addEventListener("click", function() {
//     console.log("Button clicked");
// });

//function with parameters
