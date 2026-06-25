// const name = "Munashe"
// console.log(name)

// 2.let age = 18 years;
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
//const yourAge = prompt("Enter your age");
//console.log(" Ohh! you are " + yourAge );

//14.temperature in celcius
// let celsius = Number(prompt("Enter temperature:"));

// let fahrenheit = (celsius * 9/5) + 32;

// console.log( fahrenheit);


//15. Asking for a number
// const yourNum = prompt("Put any number")


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
 //}
//17.EVEN AND ODD NUMBERS

 
    
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

// const votingAge = prompt("Enter your age:");
// switch  (true){

// case (votingAge <=18):
// console.log("You are able to vote")
// break;

// case(votingAge >=18):
// console.log("You are still young to vote")
// break;

// default:
//     console.log("Age not listed")
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
// let year = prompt("Enter a year:");
// switch (true){

// case(year % 4 === 0):
//     console.log(year + " is a leap year ");
//     break;
 

// case (year % 4 !== 0):
//     console.log(year + " is not a leap year ");
//     break;

//  default:
//     console.log("year not mentioned")
// }

//22. Divison
// const number = prompt("Put your number:");
// switch(true)

//     case(number % 5 === 0):
//     console.log(number + "is divisible by 5")
//     break;

//     case(number % 5 !== 0):
//     console.log(number + "is not divisible by 5")
//     break;

//     default:
//         console.log("Number not mentioned")

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

// const vowels = prompt("Enter your letter")
// switch (true){

// case("a"):
// console.log ("The letter + vowels  is a vowel")
// break;

// case("e"):
// console.log ("The letter + vowels  is a vowel")
// break;

// case("i"):
// console.log (vowels + " is a vowel")
// break;

// case("o"):
// console.log ("The letter + vowels  is a vowel")
// break;

// case("u"):
// console.log ("The letter + vowels  is a vowel")
// break;

// //default:
//     //console.log("Not a vowel")

// }

 
// let character = prompt("Enter a character:");

// switch(true) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("The character is a vowel");
//         break;

//     default:
//         console.log("The character is not a vowel");
// }

// loops// declares variable
//for (let num = 0; num<=10 ; num++) {
     //console.log(num)
    
//}

//for (let num =10; num >=0; num--) {
//      console.log(num) 
     


// for (let c = 0; c < name.length; c++) {
   //  console.log  (name[c]);
     
//}

// let name = "munashe"
// for (let c = name.length; c >-1; c--) {
//      console.log(name[c])
// }


let username = "";

while(username === "" || username === null){
  username = window.prompt("Enter your name")
}

 console.log("Sanibonani"  +  username);