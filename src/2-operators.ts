//Operators (VIdeo No 11)

/*Operators in JS

1-Arithmetic Operators
let a = 5
let b = 2

console.log("a = " , a, " & b =", b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);*/

/*Modulus Operator = %
console.log("a%b=",a%b);*/

/*Exponential Operator = **
console.log("a**b=",a**b);*/

/*Urinary Operator
let a = 5
let b = 2
Increment Operator = ++ (Increase by 1)
a++;
console.log("a=",a);
Type of Increment Operator
Post a++ = Value change in next line
Pre ++a = Value change in current line
console.log("a =", a, "& b =", b);
a++,
console.log("++a=",++a);//6
console.log("a++=", a++);//5
console.log("a", a);//6

console.log("++a=", ++a);//7*/

/*Decrement Operator = -- (Decrease by 1)
a--;
console.log("a=",a);
Post a-- = Value change in next line
Pre --a = Value change in current line
console.log("a--=", a--);//6
console.log("a", a);//5
console.log("--a=", --a);//6*/

//Example

// let a: number = 5;
// let b: number = 2;
// let c: number;

// c = ++a + a++ + --b + b-- + a + b++ + b;

// //6 + 6 + 1 + 1 + 7 + 0 + 1

// console.log(c);

/*Assignment Operators
let a = 5
let b = 2

a += 4 //a = a+4
console.log("a = ",a);
a -= 4 //a = a-4
console.log("a = ",a);
a *= 4 //a = a*4
console.log("a = ",a);
a /= 4 //a = a/4
console.log("a = ",a);
a %= 4 //a = a%4
console.log("a = ",a);
a **= 4 //a = a**4
console.log("a = ",a);*/

// {
//4a-Arithmetic/Mathematical Operators;
// const ageRamzan:number = 2044 - 1990; //using const as birth year not going to change for anyone
// const ageMirha:number = 2044 - 2022;
// console.log(ageRamzan);
// // console.log(ageMirha);
// }
//We can simplify the above code
// {
// const now = 2044;
// const ageRamzan = now - 1990;
// const ageMirha = now - 2022;
// console.log(ageRamzan, ageMirha); //we can use multiple values in console.log
// }
//Basic Mathematic Operators
// console.log(ageRamzan * 2, ageRamzan / 2, 2 ** 3);
//here ** means Exponentiation which simply here above 2 * 2 * 2 = 8

//Add + operator in JS
// let firstName: string = "Muhammad Ramzan";
// let lastName: string = "Akram";
// console.log(firstName + " " + lastName, 2 + 2); // we can use the plus + operator for joining (Concatenating) the strings and also add two number by using it.
//we can also simplify it by using template literals
// console.log(`${firstName}${lastName}`);

//Assignment Operators
// let x:number = 10 + 5; //15
// x += 10; //x = x + 10 = 25 as 15 + 10 = 25
// x *= 4; //x = x * 4 = 100 as 25 * 4 = 100
// x++; // X = x +1 = 101 as 100 + 1 = 101
// x--; //100
// x--; // x = x - 1 = 99 as 101 - 1 - 1 = 99
// console.log(x);

//Comparison Operators
// console.log(ageRamzan > ageMirha);
// console.log(now - 1990 > now - 2022); // we can do the same as the above code do.
// console.log(ageRamzan >= 18);
// const isFullAge = ageRamzan >= 18;
// console.log(ageRamzan >= 55);

//Precedence of Operators (VIdeo No 12)
// const now:number = 2044;
// const ageRamzan = now - 1990;
// const ageMirha = now - 2022;
// console.log(now - 1990 > now - 2022);
//In the above code we have little question that how js first execute subtraction and then compare the both value. The answer of this is - has more precedence value than > than we can check it out on MDN website by google javascript precedence.
//There are also a concept of left to right and right to left calculations in JS you can see this on MDN precedence table.
