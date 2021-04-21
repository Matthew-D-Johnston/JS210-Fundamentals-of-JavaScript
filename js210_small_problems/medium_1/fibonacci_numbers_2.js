"use strict";

function fibonacci(number) {
  let result = 1;
  let nMinusOne = 1;
  let nMinusTwo = 1;

  for (let index = 3; index <= number; index += 1) {
    result = nMinusOne + nMinusTwo;
    nMinusTwo = nMinusOne;
    nMinusOne = result;
  }

  return result;
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));
console.log(fibonacci(50));
console.log(fibonacci(75));