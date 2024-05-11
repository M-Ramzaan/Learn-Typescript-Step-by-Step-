//-Typescript Slides
//Date - 09/May/24
//Session Time - 05:45 AM
//Topic No 01 - Primitive Data Types
//Primitive Data Types (VIdeo No 09)
// {
//1-Number
//   let age: number = 23; // Not confirmed but it can store number upto 2^53
//2-String
//   let firstName: string = "Ramzan";
//3-Boolean
//   let fullAge: boolean = true;
//4-Undefined
//   let children: undefined;
//5-Null = Also means empty value
//6-Symbol = Unique value not very useful for us
//7-Bigint = Large integer number value. Store number more than 2^ 53.
// }

//1-Boolean
// {
//   let data1: boolean = true;
//   console.log(data1);
//   console.log(typeof data1);
// }

//2-String
// {
//   let data2: string = "Muhammad Ramzan Akram";
//   console.log(data2);
//   console.log(typeof data2);
// }

//3-Number
// {
//   let data3: number = 1990;
//   console.log(data3);
//   console.log(typeof data3);
// }

//4-Undefined
// {
//   let data4: undefined;
//   console.log(data4);
//   console.log(typeof data4);
// }

//5-Null
// {
//   let data5: null;
//console.log(null);
//   console.log(typeof null); //It give null type as object it is bug but this bug is not fixed due to legacy which we cover later in this courses.
// }

//We discussed the three most important and most used data types here above.

//Using Var, Let, Const for declaring variables value (VIdeo No 10)

// In modern js we don't use var as due to its not supporting block scope.
// {
//   let age: number = 31;
//we can reassign the value to variable age as below, this is also called mutate variable value.
//   age = 33;
// const birthYear:number = 1990;
//We also use const to declaring variable but it is immutable as we cannot assign another value to it.
// birthYear = 1991;//this give const error.
// const job; //this give const error. We cant declare const empty.
// }
