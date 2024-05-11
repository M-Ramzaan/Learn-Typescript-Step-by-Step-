/*Conditional Statements

1-If Statement

let age = 16
if (age >= 18) {
  console.log("You can vote")
}
if (age < 18) {
  console.log("You cannot vote")
}*/
/*
let mode = "Light"
if (mode === "Dark") {
  color = "Black";
}

if (mode === "Light") {
  color = "White";
}
console.log(color);*/

/*2-If Else Statement

let mode = "Dark"
if (mode === "Dark") {
  color = "Black";
} else {
  color = "White";
}
console.log(color); 

let age = 16
if (age >= 18) {
  console.log("You can Vote")
} else {
  console.log("You cannot Vote")
}*/

/*3-Even or Odd Numbers
let num = 9
if (num % 2 === 0){
  console.log(num, "is an Even Number")
} else {
  console.log(num,"is an Odd Number")
}*/

/*4-Else if statement

let age = 19;
if (age < 18){
  console.log("junior");
} else if (age > 60){
  console.log("senior");
} else {
  console.log("middle");
}

let mode = "silver";
let color;
if (mode === "dark"){
  color = "black";
} else if (mode === "pink"){
  color = "pink";
} else if (mode === "blue"){
  color = "blue";
} else {
  color = "white";
}
console.log(color);*/

/*Practice Question
let score = prompt("Enter your score (0-100):");
let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
}
console.log("As per your score your grade was =",grade);*/

//4-Taking Decisions "if else statements" (VIdeo No 15)

//Syntax

// if - keyword (age >= 18 - Parameter) {
//   console.log("Mirha can get her driving license."); - Condition
// } else - Keyword {
//   console.log(
//     `Mirha have to wait ${
//       18 - age
//     } year after that she get here driving license.`
//   );-Condition
// }

// const age: number = 18;
//below code is executed in a way that if () given condition is true that code is run otherwise in case it false then else condition is executed.
// if (age >= 18) {
//   console.log("Mirha can get her driving license.");
// } else {
//   console.log(
//     `Mirha have to wait ${
//       18 - age
//     } year after that she get here driving license.`
//   );
// }

// const birthYear: number = 1990;
// let century;

// if (birthYear <= 2000) {
//let century = 20; // this give error that century is not defined so we have to declare the century variable empty outside the block of if and else that we read in the upcoming lectures.
//   century = 20;
// } else {
//   let century = 21;
//   century = 21;
// }
// console.log(century);

/*5-Ternary Operators

let age = 17;
//let result = age >= 18 ? "adult" : "not adult"
//console.log(result);
age >= 18 ? console.log("adult") : console.log("not adult");
console.log;*/

//The conditional (Ternary) Operators.

// const age = 17;

// age >= 18
//   ? console.log(`My age is enough to get a driving license.`)
//   : console.log(`My age is not enough to get a driving license.`);

// const running =
//   age >= 18 ? console.log(`I can run fast`) : console.log(`I cannot run fast`);

//Video-23 The switch statement.

//1-Switch Statement

// let day: string = "Thu";

// switch (day) {
//   case "Monday":
//     console.log("Learn Jonas Course");
//     break;
//   case "Tuesday":
//     console.log("Learn Typescript");
//     break;
//   case "Wednesday":
//   case "Thursday":
//     console.log("Learn Python");
//     console.log("Watch Zeeshan Usmani Videos");
//     console.log("Do Assignment");
//     break;
//   case "Friday":
//     console.log("Do exercise");
//     break;
//   case "Saturday":
//     console.log("Watch Movie");
//     break;
//   case "Sunday":
//     console.log("Enjoy Weekend");
//     break;
//   default:
//     console.log("Day is not valid");
// }

//2-If Else Statement
// if (day === "Monday") {
//   console.log("Learn Jonas Course");
// } else if (day === "Tuesday") {
//   console.log("Learn Typescript");
// } else if (day === "Wednesday" || day === "Thursday") {
//   console.log("Learn Python");
//   console.log("Watch Zeeshan Usmani Videos");
//   console.log("Do Assignment");
// } else if (day === "Friday") {
//   console.log("Learn Typescript");
// } else if (day === "Friday") {
//   console.log("Do exercise");
// } else if (day === "Saturday") {
//   console.log("Watch Movie");
// } else if (day === "Sunday") {
//   console.log("Enjoy Weekend");
// } else {
//   console.log("Day is not valid");
// }
