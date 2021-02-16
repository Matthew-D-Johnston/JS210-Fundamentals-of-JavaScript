"use strict";

function shift(arr) {
  return arr.splice(0, 1)[0];
}

function unshift(arr, ...args) {
  let arrCopy = arr.slice();

  if (Array.isArray(args)) {
    
    for (let index = 0; index < args.length; index += 1) {
      arr[index] = args[index];
    }

    for (let index = 0; index < arrCopy.length; index += 1) {
      arr[index + args.length] = arrCopy[index]; 
    }
  } else {
    arr[0] = args;
    for (let index = 1; index <= arrCopy.length; index += 1) {
      arr[index] = arrCopy[index - 1];
    }
  }

  return arr.length;
}

console.log(shift([1, 2, 3]));
console.log(shift([]));
console.log(shift([[1, 2, 3], 4, 5]));

console.log(unshift([1, 2, 3], 5, 6));
console.log(unshift([1, 2, 3]));
console.log(unshift([4, 5], [1, 2, 3]));

const testArray = [1, 2, 3];
console.log(shift(testArray));
console.log(testArray);
console.log(unshift(testArray, 5));
console.log(testArray);
console.log(unshift(testArray, 6, 7, 8));
console.log(testArray);