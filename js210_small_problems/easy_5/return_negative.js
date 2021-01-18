"use strict"

// function negative(number) {
//   return -Math.abs(number);
// }

// console.log(negative(5));
// console.log(negative(-3));
// console.log(negative(0));


// Further Exploration

function negative(number) {
  return number >= 0 ? -number : number;
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));
