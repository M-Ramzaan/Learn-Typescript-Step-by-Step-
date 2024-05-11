//console.log("Lecture No 05");

//Functions (Block of code for a specified task, It also be used when required)
//1-Define Function
// function myFunction() {
//   console.log("My name is Muhammad Ramzan Akram.");
//   console.log("I am learning JS from Shardha Khapra Youtube Channel.");
//}
//2-Call Function
// myFunction();
//2- Parameters and Inputs
// function myFunction(msg) {
//   console.log(msg);
// }
// myFunction("Hello my name is Muhammad Ramzan Akram");

// function myFunction(msg, n) {
//   console.log(msg * n);
// }
// myFunction("Hello my name is Muhammad Ramzan Akram", 100);
//NaN error means msg typed here in the code above is not a number

// 3-Sum Function (Make a function to calculate sum of two numbers)
// function sum(x,y) {
//   console.log(x + y);
// }

//Return with a value
// function sum(x, y) {
//   s = x + y;
//   return s; // just return one value for multiple values we use arrays.
// }
// let val = sum(100, 400);
// console.log(val);

//1- Arrow Function =>
//Normal way to write function
// function sum(a, b) {
//   return a + b;
// }

//Modern JS way to write function
// const arrowsum = (a, b) => {
//   return a + b;
// };

// function mul(a, b) {
//   return a * b;
// }

// //Modern JS way to write function
// let = arrowmul = (a, b) => {
//   return a * b;
// };

//Practice Question
//Count Vowels in a string (Normal Function Method)
// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }

//Count Vowels in a string (Arrow Function Method)
// const countVow = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

// Functions
/*
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples: any, oranges: any) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah: any) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah: any) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

///////////////////////////////////////
// Arrow functions (These functions has no this keyword that is covered in upcoming lectures.)

const calcAge3 = (birthYear: number) => 2050 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirement = (birthYear: number, firstName: string) => {
  const age = 2024 - birthYear;
  const retirement = 60 - age;
  //return retirement;
  return `${firstName} retires after ${retirement} years.`;
};
console.log(yearsUntilRetirement(1990, "Muhammad Ramzan Akram"));
console.log(yearsUntilRetirement(1998, "Zeeshan Akram"));


//Video No33
//Calling one function inside another.

//Normal function

function cutIntoPieces(fruit: number) {
  return fruit * 4;
}

//Arrow function

const cutIntoPieces = (fruit: number) => {
  return fruit * 10;
};

//Normal function

function fruitProcessor(apples: number, oranges: number) {
  const applePieces = cutIntoPieces(apples);
  const orangePieces = cutIntoPieces(oranges);
  const juice = `Let's make a juice with ${applePieces} apple pieces and with ${orangePieces} orange pieces.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

//Arrow Function

const fruitProcessor = (apples: number, oranges: number) => {
  const applePieces = cutIntoPieces(apples);
  const orangePieces = cutIntoPieces(oranges);
  const juice = `Let's make a juice with ${applePieces} apple pieces and with ${orangePieces} orange pieces.`;
  return juice;
};

console.log(fruitProcessor(2, 3));

//Video No 34 (Review Function)

const calcAge: any = function (birthYear: number) {
  return 2024 - birthYear;
};

const yearsUntilRetirement = function (birthYear: number, firstName: string) {
  const age = calcAge(birthYear);
  //const age = 2024 - birthYear;
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} is retire after ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} is already retired.`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1990, "Muhammad Ramzan"));
console.log(yearsUntilRetirement(1956, "Muhammad Akram"));
*/

//Task 01 Add Numbers function
function addNumber(num1: number, num2: number) {
  return num1 + num2;
}

console.log(addNumber(1, 2));

//Task 02 Calculate average Numbers function

function calcAvg(
  num1: number,
  num2: number,
  num3: number,
  num4: number
): number {
  return (num1 + num2 + num3 + num4) / 4;
}

console.log(calcAvg(1, 2, 3, 4));
