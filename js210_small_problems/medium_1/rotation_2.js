"use strict";

function rotateRightmostDigits(number, position) {
  if (position === 0) {
    return number;
  }

  let digits = number.toString().split('');
  position = -(position % digits.length);                  // deals with position values > the number of digits
  let rotated = digits.concat(digits.splice(position, 1));
  return Number(rotated.join(''));
}

console.log(rotateRightmostDigits(735291, 1));
console.log(rotateRightmostDigits(735291, 2));
console.log(rotateRightmostDigits(735291, 3));
console.log(rotateRightmostDigits(735291, 4));
console.log(rotateRightmostDigits(735291, 5));
console.log(rotateRightmostDigits(735291, 6));
console.log(rotateRightmostDigits(735291, 7));
console.log(rotateRightmostDigits(735291, 8));
console.log(rotateRightmostDigits(735291, 0));
console.log(rotateRightmostDigits(0, 1));
console.log(rotateRightmostDigits(24623, 0));
console.log(rotateRightmostDigits(24623, 1));