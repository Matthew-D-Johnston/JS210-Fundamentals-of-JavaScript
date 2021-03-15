"use strict";

function sum(int) {
  return String(int)
    .split('')
    .reduce((sum, digit) => Number(sum) + Number(digit));
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));
