"use strict";

function reverseNumber(num) {
  let digits = num.toString().split('');
  let reversedDigits = [];

  digits.forEach(digit => reversedDigits.unshift(digit));

  return Number(reversedDigits.join(''));
}

console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(456));
console.log(reverseNumber(12000));
console.log(reverseNumber(1));
