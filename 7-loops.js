"use strict";
/*Loops and Strings
//count=1; (Initializer statement)
//count=<=5; (Stoping Statement)
//count++; (Updation Statement)
for (count = 1; count <= 5; count++) {
  console.log("Ramzan Akram");
}*/
/*Example 01 Calculate 1 to n numbers (Loop)
let sum = 0;
let n = 100
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("sum =", sum);
for (i = 1; i <= 5; i++) {
  console.log("i = ", i);
}*/
/*Infinite Loop
//Infinite loop is never ending loop its stoping condition is never end.
//Example that we never run
for (i = 1; i >= 0; i++){
  console.log("i = ", i);
}*/
/*While Loop (Same work can be donw with while loop that we do with the for loop but the syntax is little bit diffrent)
let i = 1;
while (i <= 10) {
  console.log("i = ", i);
  i++;
}*/
/*Do while loop
let i = 1;
do {
  console.log("Ramzan Akram");
  i++;
} while (i <= 10);*/
/*for of loop used for strings and arrays
let str = "MuhammadRamzanAkram"; //declare string as a variable
let size = 0;

for (let val of str) {
  //delare i as a variable inside the for of loop
  console.log("val =", val);
  size++;
}
console.log("size =", size);*/
/*for in loop used for objects
let student = {
  name: "Muhammad Ramzan Akram",
  age: 33,
  cgpa: 3.46,
  semester: 8,
  university: "Virtual Univesity",
  ispass: true,
};

for (let key in student) {
  // it display keys means name and age etc.
  console.log("Key =", key, "Value =", student[key]); //it display the declared key Muhammad Ramzan Akram and 33 and more.
}*/
//Practice Question no 01
// for (let num = 0; num <= 100; num++)
//   //console.log("num =", num); print number 1 to 100
//   //if (num % 2 === 0) { //even numbers
//   if (num % 2 !== 0) {
//     //odd numbers
//     console.log("num =", num);
//   }
//Practice Question no 02 Number Game
// let gameNum = 25;
// let userNum = prompt("Guess the game number:");
// while (userNum != gameNum) {
//   userNum = prompt("You guess the wrong number, please try again:");
// }
// console.log("Congrats, You guess the right number");
//Video # 43
//Loops
//1-The For Loop
//Lets take a example of lifting weight in a gym.
//If anyone hav eto lift weight 10 times.
/*
console.log("Lift weight in the gym repeat 01.");
console.log("Lift weight in the gym repeat 02.");
console.log("Lift weight in the gym repeat 03.");
console.log("Lift weight in the gym repeat 04.");
console.log("Lift weight in the gym repeat 05.");
console.log("Lift weight in the gym repeat 06.");
console.log("Lift weight in the gym repeat 07.");
console.log("Lift weight in the gym repeat 08.");
console.log("Lift weight in the gym repeat 09.");
console.log("Lift weight in the gym repeat 10.");

//Now we can do the same in one line via code.
for (let rep = 1; rep <= 10; rep++) {
  //rep = rep + 1. (we can use this or we can use the increment operator as we learn in operators.
  console.log(`lift weight in the gym repeat ${rep} `);
}
*/
//Video No 44
//More uses of For Loop
//Let use array as an example and access its via For Loop
/*
const ramzanArray = [
  "Muhammad Ramzan",
  "Akram",
  2024 - 1990,
  "Office Assistant",
  ["Hassan", "Waqar", "Shehraz"],
  true,
];

const types = [];
//first think about a traditional way to print all this to the console.

// console.log(ramzanArray[0]);
// console.log(ramzanArray[1]);
// console.log(ramzanArray[2]);
// console.log(ramzanArray[3]);
// console.log(ramzanArray[4]);

//we can use loop and print whole just using the for loop

for (let i = 0; i < 5; i++) {
  console.log(ramzanArray[i]);
}
// we can print the  whole by using this but what if we add any more element in the array ramzan for example has driving license = true. You might think we can change the condition to i<6 but that is not dynamic in coding we have to do things run via logic so we can use the below code instead of above.

for (let i = 0; i < ramzanArray.length; i++) {
  console.log(ramzanArray[i], typeof ramzanArray[i]);
  //we can also create a new array using the types of this ramzanArray this is just an educational example that what we can do via using arrays

  //First way of doing that

  types[i] = typeof ramzanArray[i];

  //second way of doing that

  types.push(typeof ramzanArray[i]);
}

//Above code will run the added element till the end of the ramzanArray.

console.log(types);

//Another Example of an array
//Calculate ages on the basis of numbers.

{
  const years = [1990, 1991, 1998, 2022];
  const ages = []; // now we can calculate the ages via for loop and save it into this array

  for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
  }
  console.log(ages);
}

//Continue and Break statements
//Continue

const ramzanArray = [
  "Muhammad Ramzan",
  "Akram",
  2024 - 1990,
  "Office Assistant",
  ["Hassan", "Waqar", "Shehraz"],
  true,
];

//Print only strings via loop

console.log(`---Only String---`);
for (let i = 0; i < ramzanArray.length; i++) {
  if (typeof ramzanArray[i] !== "string") continue;
  console.log(ramzanArray[i], typeof ramzanArray[i]);
}

//Break
//Print just to the required type via loop

console.log(`---Continue till the  number found---`);
for (let i = 0; i < ramzanArray.length; i++) {
  if (typeof ramzanArray[i] === "number") break;
  console.log(ramzanArray[i], typeof ramzanArray[i]);
}
*/
//Video N0 45
//Print and access element backwards in the array.
/*
const ramzanArray = [
  "Muhammad Ramzan",
  "Akram",
  2024 - 1990,
  "Office Assistant",
  ["Hassan", "Waqar", "Shehraz"],
  true,
];

for (let i = ramzanArray.length - 1; i >= 0; i--) {
  console.log(i, ramzanArray[i]);
}
*/
//How to create a Loop inside the loop
/*
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------Exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lift weight repetition no ${rep}`);
  }
}
*/
//Video No 46
//The While Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`FOR: This is lifting no ${rep}`);
// }
//While Loop
// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: This is lifting no ${rep}`);
//   rep++;
// }
//Roll a dice example till we get 6
// let dice = Math.trunc(Math.random() * 6 + 1);
// while (dice !== 6) {
//   console.log(`You roll a ${dice} times.`);
//   dice = Math.trunc(Math.random() * 6 + 1);
//   if (dice === 6) {
//     console.log(`WOW you got ${dice} now the loop is about to end.`);
//   }
// }
//WE use while loop when we don't know that how much times we need the output like the above example we don't know when the six is coming.
