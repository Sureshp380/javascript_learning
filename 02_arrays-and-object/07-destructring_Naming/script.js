const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring

const todo = {
  id: 1,
  title: 'Take Out Trash',
  user : {
    name: 'John'
  },
};

const {id: todoId , title, user : {name}} = todo;

// Destructure Arrays
const numbers = [23, 47, 44, 29];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);