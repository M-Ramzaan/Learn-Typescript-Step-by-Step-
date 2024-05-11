"use strict";
//Arrays
//Marks
// let marks = [92, 83, 65, 87, 90];
// console.log(marks);
// let heroes = [
//   "Ramzan",
//   "Sir Zia",
//   "Sir Kasim",
//   "Sir Daniyal Nagoori",
//   "Governor Kamran Tessori",
//   "Sir Irfan Malik",
// ];
// console.log(heroes);
// console.log(heroes.length);
// console.log(typeof heroes);
//1-Array Indices
//Marks
// let marks = [92, 83, 65, 87, 90];
// console.log(marks[0]);
// marks[0] = 100;
// console.log(marks[0]); //we can update the marks(number) in arryas.
// let heroes = [
//   "Ramzan",
//   "Sir Zia",
//   "Sir Kasim",
//   "Sir Daniyal Nagoori",
//   "Governor Kamran Tessori",
//   "Sir Irfan Malik",
// ];
// console.log(heroes[4]);
// heroes[4] = "Sir Kamran Tessori"; // In arrays we can update the string but in javascript strings are immutable means they cant be change or update independently.
// console.log(heroes[4]);
// 2-Looping over an array
// let heroes = [
//   "Ramzan",
//   "Sir Zia",
//   "Sir Kasim",
//   "Sir Daniyal Nagoori",
//   "Governor Kamran Tessori",
//   "Sir Irfan Malik",
// ];
// for (i = 0; i < heroes.length; i++) {
//   console.log(heroes[i]);
// }
//for of loop
// let cities = ["Karachi", "Islambad", "Lahore", "Peshawar"];
// for (let city of cities) {
//   console.log(city.toUpperCase());
// }
// let items = [250, 645, 300, 900, 50];
// let i = 0;
//for of loop
// for (let val of items) {
//   let offer = val / 10;
//   items[i] = items[i] - offer;
//   console.log(`vlaue after applying offer is = ${items[i]}`);
//   i++;
// }
//for loop
// for(let i = 0; i < items.length; i++){
//   let offer = items[i] / 10;
//   items[i] -= offer;
// }
// console.log(items);
//3 Array Methods
//1-Push - add item in the end of an array
// let foodItems = ["Biryani", "Kheer", "Nehari", "Nan-Khatai"];
// foodItems.push("Kourma", "Pizza", "Cold-Drinks");
// console.log(foodItems);
//2-Pop - delete item in the end of an array
// let foodItems = ["Biryani", "Kheer", "Nehari", "Nan-Khatai"];
// console.log(foodItems);
// let deletedItems = foodItems.pop();
// console.log(foodItems);
// console.log("Deleted = ", deletedItems);
//3- toString change an array into a string just for display data in the form of string.
// let foodItems = ["Biryani", "Kheer", "Nehari", "Nan-Khatai"];
// console.log(foodItems.toString());
// console.log(foodItems);
//4- toString change an array into a string just for display data in the form of string.
// let karachi_foodItems = ["Biryani", "Nehari"];
// lahore_foodItems = ["Kheer", "Nan-Khatai"];
// chakwal_foodItems = ["Rewri", "Dry Fruits"];
// let foodItems = karachi_foodItems.concat(lahore_foodItems, chakwal_foodItems);
// console.log(foodItems);
//5-unshift - add item in the start of an array
// let foodItems = ["Biryani", "Kheer", "Nehari", "Nan-Khatai"];
// foodItems.unshift("Kourma", "Pizza", "Cold-Drinks");
// console.log(foodItems);
//6-shift - delete item in the start of an array
// let foodItems = ["Biryani", "Kheer", "Nehari", "Nan-Khatai"];
// console.log(foodItems);
// let deletedItems = foodItems.shift();
// console.log(foodItems);
// console.log("Deleted = ", deletedItems);
//Note: All methods in Arrays as well as in Strings start with a small letter.
//7-slice - return with an silce in an array no change in orignal array
// let heroes = [
//   "Ramzan",
//   "Sir Zia",
//   "Sir Kasim",
//   "Sir Daniyal Nagoori",
//   "Governor Kamran Tessori",
//   "Sir Irfan Malik",
// ];
// console.log(heroes.slice(0, 2)); //here from 1 to 2 means just show 0 and 1 not 2 last number not show any display.
// console.log(heroes.slice()); //If you dont end any number it return the all vlaues.
//8-Splice - Add, Remove and Replace in orignal array
// let heroes = [
//   "Ramzan",
//   "Sir Zia",
//   "Sir Kasim",
//   "Sir Daniyal Nagoori",
//   "Governor Kamran Tessori",
//   "Sir Irfan Malik",
// ];
// heroes.splice(2, 2, "Sir Ramzan", "Sir Hassan");
// console.log(heroes);
//Add Element in the array
// heroes.splice(0, 0, "Dr Shehraz");
// console.log(heroes);
//Delete Element in the array
// heroes.splice(0, 2,);
// console.log(heroes);
//Replace Element in the array
// heroes.splice(0, 1, "Dr Shehraz");
// console.log(heroes);
//Practice Question
// let companies = ["Netflix", "Bloomberg", "Uber", "Ola", "Microsoft"];
//console.log(companies);
// let deletedItems = companies.shift();
// console.log(companies);
// console.log(deletedItems);
// companies.splice(2,2,);
// console.log(companies);
// companies.splice(2, 1, "Amazon");
// console.log(companies);
// companies.push("Netsol");
// console.log(companies);
//Arrays is used to store more data in one variable in a easy way.
//Video no 36.
//1-1st method to create an array.
const friends = ["Ramzan", "Shehraz", "Hassan"];
const newFriends = friends.filter((friend) => {
    // The function here should return true for elements you want to keep in the new array
    return friend === "Anas" || friend === "Hamza";
});
console.log(newFriends); // Output: []
//2-2nd method to create an array.
/*
const bestFriends: string[] = new Array("Ramzan", "Shehraz", "Hassan");

//3-Access array elements.

console.log(bestFriends[0]);
console.log(bestFriends[1]);
console.log(bestFriends[2]);

//4- Array property to access how many elements are in the array.

console.log(bestFriends.length); //to see how many elements are in the array

console.log(bestFriends.length - 1); //to Access last element in the array. as in the friends array there is 3 elements so 3 -1 = 2 which is hassan as array start from 0 and hassan is at 2 so 3 -1 = 2. Same apply for all types of array.

//5-Update the element in the array.

bestFriends[2] = "Waqar"; //We can update the elements in the array despite this that this is a const.
console.log(bestFriends);

//bestFriends = ["Kamran", "Qurban", "Khuram"]; //But this line give error as we can't update the whole array as it is constant.
const firstName = "Muhammad Ramzan";
const ramzan: any[] = [
  firstName,
  "Akram",
  2024 - 1990,
  "Developer",
  bestFriends,
];
console.log(ramzan);

//6-Lets take a example of array usnig a function

function calcAge(birthYear: number) {
  return 2024 - birthYear;
}

const birthYears: number[] = [1990, 1991, 1998];

//One way to do that,

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[birthYears.length - 1]);

console.log(age1, age2, age3);

//second way to do that,

const ages = [
  calcAge(birthYears[0]),
  calcAge(birthYears[1]),
  calcAge(birthYears[birthYears.length - 1]),
];
console.log(ages);
*/
