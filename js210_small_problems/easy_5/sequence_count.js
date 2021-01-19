"use strict"

function sequence(count, start) {
  let result = [];

  for (let i = 1; i <= count; i += 1) {
    result.push(start * i);
  }

  return result;
}

console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 1000000));
