"use strict";

function staggeredCase(text) {
  let alphaIndex = 0;

  return text.split('').map(char => {
    if (/[a-z]/i.test(char)) {
      if (alphaIndex % 2 === 0) {
        alphaIndex += 1;
        return char.toUpperCase();
      } else {
        alphaIndex += 1;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL CAPS'));
console.log(staggeredCase('ignore 77 the 444 numbers'));
