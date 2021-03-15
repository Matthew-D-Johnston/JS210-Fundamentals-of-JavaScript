"use strict";

function reverseSentence(text) {
  let words = text.split(' ');
  return words.reverse().join(' ');
}

console.log(reverseSentence(''));
console.log(reverseSentence('Hello World'));
console.log(reverseSentence('Reverse these words'));
