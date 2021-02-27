"use strict";

const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h',
  'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's',
  't', 'v', 'w', 'x', 'y', 'z'];

function doubleConsonants(text) {
  let doubleCharred = '';

  for (let index = 0; index < text.length; index += 1) {
    if (CONSONANTS.includes(text[index].toLowerCase())) {
      doubleCharred += text[index] + text[index];
    } else {
      doubleCharred += text[index];
    }
  }

  return doubleCharred;
}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));
