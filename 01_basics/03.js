// data type are formed on the basis of how data is stored in memory and how we can access it.

// Primitive :- number, bigint, symbol, string, boolean, null, undefined 

// Non-Primitive :- array, object, function


// const myArray = ["good", "bad", "normal", null, ];
// console.log(myArray)

// const myObj = {
//     firstName: "Pankaj",
//     lastName: null,
// }

// console.log(myObj)

// const myFunct = function () {
//     console.log(Symbol("123") == Symbol("123"));
// }

// myFunct();

// //Stack(primitive) and Heap Memory(non-primitive)
// // Stack : give a copy of the value
// // Heap Memory : give a reference of that value

// let myEmailId = "pankaj-zb.kumar@ubs.com"
// let updatedEmailId = myEmailId
// updatedEmailId = "tanuj.sangwan@ubs.com"
// console.log(myEmailId);
// console.log(updatedEmailId);


let student1 = {
    name: "Pankaj",
    age: 22,
}

let student2 = student1;
// console.log(student1);
// console.log(student2);

student2.name = "Raman";

console.log(student1);
console.log(student2);