// Block Scope

const x = 100;

if(true) {
    const y = 200;
    console.log(x + y);
}

for (let i =0; i<=10; i++){
    console.log(i);
}

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}

console.log(c); // Var is global scoped, it can be accessible outside the function block. Can be reassigned inside the block.
console.log(b); // let is block scoped. It cannot be accessible outside the function block. Can be reassigned inside the block.
console.log(a) // const is block scoped. It cannot be accessible outside the function block. Cannot be reassigned inside the block.