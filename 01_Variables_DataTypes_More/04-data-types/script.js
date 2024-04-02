// String

const firstName = 'Sara';

// number
const age = 30;
const temp = 98.9;

//Boolean
const hasKids = true;

// Null
const appNumber = null;
// NUll means the variable is declared and assigned to null `empty value`. It is the primtive data type is JS and is an object. 

//undefined
let score = undefined;
// Undefined means the variable is not declared and is an object

// Symbol
const id = Symbol('id');

// BigInt
const n = 900007238272382362n;

//Reference Types
const number = [1,2,3,4,5,6];

const person = {
    name: 'Brad',
};

function sayHello() {
    console.log('Hello');
}
const output = sayHello;
console.log(output, typeof output);
