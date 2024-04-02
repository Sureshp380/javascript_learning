const arr = [34, 24, 45, 23, 36];

//Appends new elements to the end of an array, and returns the new length of the array.
arr.push(100);

//  Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
arr.pop();

// Inserts new elements at the start of an array, and returns the new length of the array.
arr.unshift(99);

//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
arr.shift();

//Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
arr.reverse();

// Determines whether an array includes a certain element, returning true or false as appropriate.
x = arr.includes(24);

// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
x = arr.indexOf(340);

// /Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
//@param start
//The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

// @param end
// The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
x = arr.slice(1, 4); // slice(start, End);

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// @param start — The zero-based location in the array from which to start removing elements.

// @param deleteCount — The number of elements to remove.

// @returns — An array containing the elements that were deleted.
x = arr.splice(1, 4); // Splice(start, howMany, "New Value", End);

console.log(x, arr);

