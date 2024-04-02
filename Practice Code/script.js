function sortArrAsc(arr) {
  const sortArr = arr.sort((a, b) => a - b);
  return sortArr;
}
const arr = [23, 45, 12, 67, 34]
console.log(`The ascending order of this array: ${arr} is : ${sortArrAsc(arr)}`);
