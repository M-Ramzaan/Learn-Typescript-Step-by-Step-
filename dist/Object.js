"use strict";
//Objects
//How to declare an object
let ramzan = {
    name: "Muhammad Ramzan Akram",
    fatherName: "Muhammad Akram",
    age: 34,
};
//How to assign this interface to a variable
//How to declare an object.
let collectionOfEmployee = [
    {
        employeeId: 20001875,
        name: "Muhammad Ramzan Akram",
        fatherName: "Muhammad Akram",
        age: 34,
    },
    {
        employeeId: 20001876,
        name: "Hassan Shehzad",
        fatherName: "Ghulam Murtaza",
        age: 28,
    },
    {
        employeeId: 20001877,
        name: "Sheraz",
        fatherName: "ABC",
        age: 28,
    },
];
let filterByEmployeeId = collectionOfEmployee.filter((employee) => employee.employeeId > 20001874);
console.log(filterByEmployeeId);
//How to access an element when an key value is present in array inside the object property given as an array
//let filterByEmployeeId = collectionOfEmployee.filter();
//How to access & update objects keys.
// console.log(ramzan.cast);
//How to update an key value in an object
// let a = {
//   name: "",
//   fatherName: "",
//   studentId: "",
// };
// let b = {
//   name: "",
//   fatherName: "",
//   age: "",
// };
// a = b;
