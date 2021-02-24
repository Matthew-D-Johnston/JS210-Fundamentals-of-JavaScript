"use strict";

function runningTotal(arr) {
  let accumulator = arr[0];
  let result = [];

  if (accumulator !== undefined) {
    result.push(accumulator);
  }

  for (let index = 1; index < arr.length; index += 1) {
    accumulator += arr[index];
    result.push(accumulator);
  }

  return result;
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));
