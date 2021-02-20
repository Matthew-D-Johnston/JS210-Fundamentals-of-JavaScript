"use strict";

function multisum(int) {
  let result = 0;
  for (let index = 1; index <= int; index += 1) {
    result += (index % 3 === 0 || index % 5 === 0) ? index : 0;
  }

  return result;
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));
