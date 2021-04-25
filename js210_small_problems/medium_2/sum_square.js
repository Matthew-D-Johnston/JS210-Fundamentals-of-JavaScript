"use strict";

function sumSquareDifference(int) {
  return squareOfSums(int) - sumOfSquares(int);
}

function squareOfSums(int) {
  let sum = 0;

  for (let idx = 1; idx <= int; idx += 1) {
    sum += idx;
  }

  return sum ** 2;
}

function sumOfSquares(int) {
  let sum = 0;

  for (let idx = 1; idx <= int; idx += 1) {
    sum += idx ** 2;
  }

  return sum;
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));
console.log(sumSquareDifference(0));
