function sayHello() {
    console.log('Hello World');
}

sayHello();

function add(num1, num2) { // Num1 and Num2 are parameters
    console.log(num1 + num2);
}

add(5, 10); // Arguments e.g 5, 10

function subtract(num1, num2) {
    return num1 - num2;
}

const result = subtract(10, 2);
console.log(result, subtract(20, 5));