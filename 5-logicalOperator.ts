//Video-18 Truthy and Falsy value.
//There are five falsy vales - 0 , "" , undefined , null , NaN.
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// console.log(Boolean(1));
// console.log(Boolean("Ramzan"));
// console.log(Boolean({}));

// //Example
// let money: number = 0;
// if (money) {
//   console.log("Don't spent it all !");
// } else {
//   console.log("You should get a Job.");
// }

// let height: string = "";
// if (height) {
//   console.log("Height is defined YAY!");
// } else {
//   console.log("Height is undefined");
// }
//Both is run else as number = 0 and String = undefined is a falsy value.

//Video-20 Boolean Logic.
//The And, Or & Not operators.
//1- And, If both condition is true answer is True otherwise false.
//2-Or, If both condition is false answer is false otherwise true.
//3-Not,It make true to false.

//Logical Operators
//Logic And && (Both Conditions should be true))
//let a = 6
//let b = 5
//One way to do that
//let cond1 = a > b
//let cond2 = a === 6
//console.log("cond1 && cond2 =", cond1 && cond2);
//Second Way to do That
//console.log("cond1 && cond2 =", a > b && a === 6);

/*Logic Or (One Conditions should be true))
let a = 6
let b = 5
//One way to do that
let cond1 = a > b
let cond2 = a === b
console.log("cond1 && cond2 =", cond1 || cond2);
//Second Way to do That
//console.log("cond1 && cond2 =", a > b && a === 6);*/

/*Logic Not (Make true condition false and False condition to true))
let a = 6
let b = 5
console.log("!(a>b)=", !(a > b));*/

//Video-21 Logical Operators.
// {
//   const hasDriversLicense: boolean = false;
//   const hasGoodVision: boolean = false;

//   console.log(hasDriversLicense && hasGoodVision); //true as in And operator is only true when all condition are true
//   console.log(hasDriversLicense || hasGoodVision); //false as in Or operator is only false when all condition are false
//   console.log(!hasDriversLicense); //false as in Not operator is make true false and false true.
//}
// //Practical Example

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive.");
// } else {
//   console.log("Someone else should drive.");
// }

// const isTired: boolean = false;
// if (!hasDriversLicense && !hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive.");
// } else {
//   console.log("Someone else should drive.");
// }

//Video-19 Equality Operators.
// {
//   const age = 18;
//   if (age == 18) console.log("You become an adult. loose"); // If we change number 18 into this code will executed as it is loosely control and it run due to type coercion.
//   if (age === 18) console.log("You become an adult. Strict");
// }
// const favorite = Number(prompt("What is your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log("23 is a very good number");
// } else if (favorite === 7) {
//   console.log("7 is also a good number");
// } else if (favorite === 9) {
//   console.log("9 is also a good number");
// } else {
//   console.log("Number is not 23 or 7 or 9.");
// }

// if (favorite !== 23) {
//   console.log("Why not 23");
// } else {
//   console.log("Number is not in the list");
// }
