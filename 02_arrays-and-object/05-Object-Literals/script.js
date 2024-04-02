let x;
const person =  {
    name: 'john Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    },
    hobbies: ['Music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

person.name = 'Jane Doe';
person['isAdmin'] = false;

delete person.age;

person.hasChildren = true;

person.greet = function () {
    console.log(`Hello, My Name is ${this.name}`);
}
person.greet();

const person2 = {
    
}
x = person;
console.log(x);