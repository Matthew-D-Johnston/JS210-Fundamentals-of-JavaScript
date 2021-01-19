"use strict"

function sequence(integer) {
  let integers = [];

  for (let currentInt = 1; currentInt <= integer; currentInt += 1) {
    integers.push(currentInt);
  }

  return integers;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));

