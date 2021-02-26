"use strict";

function digitList(number) {
  let stringDigits = number.toString().split('');
  return stringDigits.map(digit => Number(digit));
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));
