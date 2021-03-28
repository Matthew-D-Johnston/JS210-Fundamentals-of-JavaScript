"use strict";

function isUppercase(text) {
  return !text.split('').some(lowercased);
}

function lowercased(character) {
  return !!character.match(/[a-z]/g);
}

console.log(isUppercase('t'));
console.log(isUppercase('T'));
console.log(isUppercase('Four Score'));
console.log(isUppercase('FOUR SCORE'));
console.log(isUppercase('4SCORE!'));
console.log(isUppercase(''));
