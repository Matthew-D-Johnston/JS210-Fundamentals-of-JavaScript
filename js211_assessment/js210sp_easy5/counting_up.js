"use strict";

function sequence(num) {
  let sequence = [];

  for (let index = 1; index <= num; index += 1) {
    sequence.push(index);
  }

  return sequence;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));
