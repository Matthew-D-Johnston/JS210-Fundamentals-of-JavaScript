"use strict";

function sequence(count, start) {
  let multiples = [];

  for (let index = 1; index <= count; index += 1) {
    let multiple = start * index;
    multiples.push(multiple);
  }

  return multiples;
}

console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 1000000));
