"use strict";

function maxRotation(number) {
  let digits = String(number).split('');

  for (let index = 0; index < digits.length - 1; index += 1) {
    digits.push(digits.splice(index, 1).pop());
  }

  return Number(digits.join(''));
}

console.log(maxRotation(735291));
console.log(maxRotation(3));
console.log(maxRotation(35));
console.log(maxRotation(105));
console.log(maxRotation(8703529146));
