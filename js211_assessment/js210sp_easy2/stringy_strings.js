"use strict";

function stringy(int) {
  let result = '';
  for (let index = 1; index <= int; index += 1) {
    result += index % 2 === 0 ? '0' : '1';
  }

  return result;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));
