// Ways to declare a variable
// var, let, const

//************JavaScript Var Keyword******************
// The var is the oldest keyword to declare a variable in JavaScript. It has the global scope or function scoped which means variables defined outside the function can be accessed globally, and variables defined inside the function can be acceessed within the function. for example : 
// In the global scope var and let pretty much work the same


var _fName = 'John';
function f(){
    var _sName = 'Doe';
    var _sName = 'John'
    console.log(_fName, _sName);
    // Explaination: The variable `_fName` is accessible inside the function f(); However, the variable `_sName is not accessible outside the function
}


// JavaScript `Let` Keyword
// The let keyword is an improved version of the var keyword it is introduced in Ecmascript 2015. These variable has the block scope. It can't be accessible outside the the particular code block. for eg:

function f() {
    if (true){
        let b = 9;
        console.log(b, _fName);
    }
   //console.log(b);
}
f();

// Difference between let and var

// var: The scope of a var variable is functional or global scope. It can be updated and re-declared in the same scope. It can be accessed without initialization as it default is `undefined`. These variables are hoisted.

// let: The scope of the let variable is block scope. It can be updated but cannot be re-declared in the same scope. it can be declared without initialization. It cannot be accessed without initialization otherwise it will give `referenceError`. These variables are hoisted but stay in the temporal dead zone until the initialization.

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age)

// Re-assigning Variable
 age = 31;
 console.log(age);
 
 let score = 1;
 
 console.log(score);
 
 if (true) {
    score = score + 1;
 }
 
 console.log(score);
 
 /*The value of a const remains unchanged throughout the function or program.
 In case of an array, We can use push() for reassigning the array
 In case of Object we can always reassign the properties. for e.g 
 
 */
 const x = 100;
const arr = [1,2,3,4,5];
arr.push(6);
console.log(arr);

const person = {
    name: 'Brad'
};

person.name = 'John';
person.email = 'Brad@gmail.com';
console.log(person)


// Declare multiple values at once

let a, b, c;