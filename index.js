// 1.name
// const name = "Munashe"
// console.log(name)

//2.age
// let age = "18 years"
// console.log(age);

//3.Calculating Area of the Rectangle
// const length =10;
// const width = 12;

// const area = length * width;
// console.log(area);

// 4.Sum of Two Numbers
// const num1 = 15
// const num2 = 10

// const sum = num1 + num2;
// console.log(sum);

// 5.Favorite Color
// const favoriteColor = "Blue";
// console.log ("My favorite color is " + favoriteColor)


// 6. Variables First and Last Names

// const firstName = "Munashe";
// const lastName = "Mazhambe";
// console.log(firstName + "  " +  lastName);

// 7.Modulus Operator

// const num3 = 17;
// const num4 = 3;

// const modulus = num3 % num4;
//  console.log(modulus);

//  8.converting A String to Number

// const num5 = "25";
// num5 == 25;
// console.log(num5);

// 9.swapping value

// let num6 = 30;
// let num7= 40;

// let temp = num6
//  num6 = num7
//  num7 = temp

//  console.log("num6 = ",num6);
//  console.log("num7 = ",num7);

// 10.the average of three numbers
// let num8 = 10;
// let num9 = 20;
// let num10 = 50;

// average = (num8 + num9 + num10 ) / 3
// console.log(average)

// 2.INPUT AND OUTPUT
// 11.Greeting
// const yourName = prompt("Enter your name");
// console.log(" Hello " +  yourName ) ;

// 12.//Displaying Sum of Two Numbers

// let num11 = 5;
// let num12 = 10;

// let totalSum = num11 + num12;

// console.log(totalSum);


//13. Asking your age
// const yourAge = prompt("Enter your age");
// console.log(" Ohh! you are " + yourAge );

//14.temperature in celcius
// let celsius = Number(prompt("Enter temperature:"));

// let fahrenheit = (celsius * 9/5) + 32;

// console.log( fahrenheit);


//15. Asking for a number
// let number = prompt("Enter a number:");

// let square = number * number;

// console.log("The square of " + number + " is " + square);

//16.Conditional Statements

// const num = prompt("Put your number:");

//  switch (true){

// case( num <=0 ):
// console.log("negative")
// break;

// case (num>=0):
// console.log("positive")
// break;

// default:
//     console.log("Not a number")
//  }
//17.EVEN AND ODD NUMBERS
// let number = Number(prompt("Enter a number:"));

// switch (number % 2) {
//     case 0:
//         console.log(number + " is even");
//         break;

//     case 1:
//     case -1: 
//         console.log(number + " is odd");
//         break;

//     default:
//         console.log("Please enter a valid number");
// }
 
    
//18.COMPARING NUMBERS

// let n1 = 60;
// let n2 = 75;

// switch (true) {

//     case (n1 > n2):
//         console.log(n1 + " is larger");
//         break;

//     case (n2 > n1):
//         console.log(n2 + " is larger");
//         break;

//     default:
//         console.log("Both numbers are equal");
// }


//19.CHECKING  ELIGIBILITY

// let votingAge = Number(prompt("Enter your age:"));

// switch (true) {

//     case (votingAge < 18):
//         console.log("You are too young to vote");
//         break;

//     case (votingAge >= 18):
//         console.log("You are eligible to vote");
//         break;

//     default:
//         console.log("Invalid age");
// }


//20.Student marks
// const testMark = prompt("Enter your mark:");
// switch  (true){

// case (testMark <=49):
// console.log("Failed!")
// break;

// case (testMark >49 &&  testMark <=50):
//     console.log ('Passed!');
//     break;

// case(testMark >= 50):
// console.log("Passed !")
// break;

// default:
//     console.log("Mark not mentioned")
// }

// // 21.Leap year 
// let year = (prompt("Enter a year:"));

// switch (true) {
//    case (year % 4 === 0 ):
//       console.log(year + " is a leap year");
//       break;

//       case (year % 4  !== 0):
//          console.log(year + " is not a leap year");
//          break;

//          default:
//             console.log( " year not mentioned");
// }
//22. Divison
// const number = (prompt("Enter a number:"));

// switch (true) {

// case (number % 5 === 0):
//       console.log(number + " is divisible by 5");
//       break;

// case (number % 5 !== 0):
//       console.log(number + " is not divisible by 5");
//       break;

// default:
//       console.log(number + " is not a number");
// }
// // //23. Assigning Grades

// const mark = prompt("Enter your mark");
// switch(true){

// case (mark >90 &&  mark <=100):
// console.log("A")
// break;

// case (mark >80 &&  mark <=89):
// console.log("B")
// break;

// case (mark >70 &&  mark <=79):
// console.log("C")
// break;

// case (mark >69 &&  mark >=69):
// console.log("Fail!")
// break;

// case(mark < 69):
// console.log("Retake test!")
// break;

// default:
//     console.log("Mark not mentioned")
// }
// 24. Vowels
// const letter = prompt("Enter your letter").toLowerCase();

// switch (true) {
//     case letter === "a":
//     case letter === "e":
//     case letter === "i":
//     case letter === "o":
//     case letter === "u":
//         console.log(`The letter {letter} is a vowel`);
//         break;

//         case letter !== letter:
//         console.log(`The letter ${letter} is not a vowel`);
//         break;

//     default:
//         console.log(`The letter ${letter} is not a vowel`);
// }
// //

// let a = Number(prompt("Enter the first side:"));
// let b = Number(prompt("Enter the second side:"));
// let c = Number(prompt("Enter the third side:"));

// switch (true) {

//     case (a === b && b === c):
//         console.log("The triangle is equilateral.");
//         break;

//     default:
//         console.log("The triangle is not equilateral.");
// }


// let n = 2;
// for (let n = 2; n<=10 ; n++){
//    console.log(n)
// }

// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }


// let n = 2;

// while(n <=8 ){
//    console.log(n)
//    n++;


// }

// const fruits = ["apple", "banana", "orange", "kiwi", "grape"];

// fruits.forEach(function(fruit) {
//    console.log(fruit);
// });

// const students=["Munashe", "Tafadzwa", "Tinashe", "Rumbidzai", "Chipo"];
// students.forEach(function(students){
//    console.log(students)

// })


// const fruits = ["apple", "banana", "orange", "kiwi", "grape"];

// for ( const fruit of fruits){

// console.log(fruit);
// }

//26.Logical Operators
// let number = prompt("Enter a number:");

// if (number >=1 && number <=100) {
// console.log("The number is between 1 and 100");

// }else{

// console.log("The number is not between 1 and 100");
// }


//27.Logging in
// let name = prompt("Enter your name");
// let password = Number(prompt("Enter your passcode"));

// switch (true) {

//     case (name === "Gerald" && password === 1234):
//         console.log("You can continue logging in");
//         break;

//     default:
//         console.log("Invalid name or password");
// }


//28.Driver's License test
// let age = Number(prompt("Enter your age"));
// let iDNumber = prompt("Enter your identity number");

// switch (true) {

//     case (age >= 18 && iDNumber === "37-2011510L38"):
//         console.log("You qualify for a driver's license.");
//         break;

//     default:
//         console.log("You do not qualify for a driver's license.");
// }


//29. Dividing Numbers
// const dividend = prompt("Enter any number")

// if(dividend % 3 === 0 && dividend % 5 ===0) {
//     console.log("The number is divisible by 3 and 5");

// }
// else{

//     console.log("The number is not divisible by 3 and 5")
// }



//30. Century year

// let year = prompt("Enter a year")

// if( year % 100 === 0){
// console.log(year +  " is a century year");

// }else{

// console.log(year +  " is not a century year")
// }


//31. Printing Numbers

// let num = 1

// for (let num = 1;num <=10; num++) {
//     console.log(num);
    
// }


//32. Printing Numbers

// let num1 = 10

// for(let num1 = 10; num1 >=1;num1--){
//     console.log(num1);
// }

//33.Even Numbers

// let num2 = 1
// for (let num2 = 1; num2 <= 20; num2 ++) {
//    if (num2 % 2===0)
//     console.log(num2);
// }

//34.Multiplication Table of 5

// let num3 = 1;

// while (num3 <= 10) {
//     console.log("5 x " + num3+ "=" +  "5  *  num3");
//     num3 ++ ;
    
// };

//35. The sum of Numbers

// let num4 = 1
// for(let num4 = 1; num4 <= 100; num4 +=1){
//     console.log(num4);
// }

//36.
// let number = 5;
// let factorial = 1;

// for (let i =number; i >=1 ; i--){
// factorial*=i

// }

//37.
// let c = 1
// let count = 0

// while(c <=50){
//     if(c%3===0){
//         count++;
//     }
//     c++;
// }

//38.
// let c = 1
// while(c <= 10){
//     console.log("7x" + c + "=" + (7*c));
//     c++;
// }

//39

// for(let c = 1; c <=5; c++){
//     if(c % 2===0){
//         console.log("**")
//     }else{
//         console.log("*");
//     }
// }


// for(let a = 1; a <=100 ;a++){
//     if(a % 3 ===0 && a % 5===0){
//         console.log(a)
//     }
//     };
// 
//number 40 to last 
//40.Print all numbers between 1 and 100 that are divisible by both 3 and 5.
//for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// };

// // Nested loop statement
// //41. Print:
// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= 5; j++) {
//         row += i;
//     }
//     console.log(row);
// }

// //42. print patterna 5*5 star grid
// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= 3; j++) {
//         row += "*";
//     }
//     console.log(row);
// };

// //43.print increasing number pattern
 
//  for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += j;
//     }
//     console.log(row);
// };

// //44.print deceasing number pattern
// for (let i = 5; i >= 1; i--) {
//     let row = "";
//     for (let j = 5; j >= 6 - i; j--) {
//         row += j;
//     }
//     console.log(row);
// };

// //45.Print a 5×5 multiplication table.
// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= 5; j++) {
//         row += (i * j) + "\t";
//     }
//     console.log(row);
// };

// //arrays(46-50)
// //46. Create an array of five fruits and print it.
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grape"];

// console.log(fruits);


// //47. Print the first element of an array.
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grape"];

// console.log("First fruit:", fruits[0]);


// //48.Print the last element of an array.
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grape"];

// console.log("Last fruit:", fruits[fruits.length - 1]);

// //49.Loop through an array and print each item.
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grape"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// };

// //50.Find the largest number in an array.
// let numbers = [12, 45, 7, 89, 23, 56, 34];
// let largest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }

// console.log("Largest number:", largest);