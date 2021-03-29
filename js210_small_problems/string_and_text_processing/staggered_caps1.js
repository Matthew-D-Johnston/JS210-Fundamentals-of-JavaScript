"use strict";

function staggeredCase(text) {
  let newText = '';

  for (let index = 0; index < text.length; index += 1) {
    if (index % 2 === 0) {
      newText += text[index].toUpperCase();
    } else {
      newText += text[index].toLowerCase();
    }
  }

  return newText;
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));
