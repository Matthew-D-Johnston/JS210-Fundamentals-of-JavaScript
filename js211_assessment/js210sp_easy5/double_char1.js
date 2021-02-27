"use strict";

function repeater(text) {
  let doubleCharred = '';

  for (let index = 0; index < text.length; index += 1) {
    doubleCharred += text[index] + text[index];
  }

  return doubleCharred;
}

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));
