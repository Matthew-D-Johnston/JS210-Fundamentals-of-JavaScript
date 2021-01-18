"use strict"

function reverseNumber(number) {
  return parseInt(String(number).split('').reverse().join(''), 10);
}

console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(456));
console.log(reverseNumber(12000));
console.log(reverseNumber(1));
