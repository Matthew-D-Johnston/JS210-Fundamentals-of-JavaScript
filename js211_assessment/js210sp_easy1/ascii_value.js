"use strict";

function asciiValue(text) {
  let result = 0;

  for (let index = 0; index < text.length; index += 1) {
    result += text.charCodeAt(index);
  }

  return result;
}

console.log(asciiValue('Four score'));
console.log(asciiValue('Launch School'));
console.log(asciiValue('a'));
console.log(asciiValue(''));
