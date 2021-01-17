"use strict"

// function digitList(number) {
//   let strNumber = String(number);
//   let digits = [];

//   for (let i = 0; i < strNumber.length; i += 1) {
//     digits.push(parseInt(strNumber[i], 10));
//   }

//   return digits;
// }

// console.log(digitList(12345));
// console.log(digitList(7));
// console.log(digitList(375290));
// console.log(digitList(444));

// Further Exploration

function digitList(number) {
  let strDigits = String(number).split('');

  return strDigits.map(digit => parseInt(digit, 10));
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));
