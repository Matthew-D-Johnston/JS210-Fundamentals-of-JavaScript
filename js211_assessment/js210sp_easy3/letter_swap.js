"use strict";

function swap(text) {
  let words = text.split(' ');
  let modifiedWords = [];

  words.forEach(function (word) {
    modifiedWords.push(letterSwapped(word));
  });

  return modifiedWords.join(' ');
}


function letterSwapped(word) {
  let chars = word.split('');
  let firstChar = chars[0];
  let lastChar = chars[chars.length - 1];

  chars.splice(0, 1, lastChar);
  chars.splice(chars.length - 1, 1, firstChar);
  return chars.join('');
}

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log('a');
