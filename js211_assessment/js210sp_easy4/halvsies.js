"use strict";

function halvsies(arr) {
  let midpoint = Math.ceil(arr.length / 2);
  let arr1 = arr.slice(0, midpoint);
  let arr2 = arr.slice(midpoint, arr.length);
  return [arr1, arr2];
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));
