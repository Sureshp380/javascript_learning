// // Challenge 1 = Convert Fahrentheit to Celsius. Formula to convert temp 
// // (F - 32) * 5 / 9

// // function getCelsius (tempInF) {
// //     return (tempInF - 32) * 5 / 9;
// // }

// // Arrow Function 
// const getCelsius = (f) => (f - 32) * 5 / 9;

// console.log(`The temprature is ${getCelsius(100)}`);

// // Challenge - 2 Find the min and max value from an array

// //const arr = [1,2, 3, 4, 5, 6];

// function minMax(arr) {
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     return {
//         min,
//         max
//     }
// }

// console.log(minMax([10,2, 3, 41, 5, 6]));

// Challenge 3 = Area of Rectangle

((length, width) => {
    const area = length * width;
    console.log(area)
})(10, 20);