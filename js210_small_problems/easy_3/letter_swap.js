"use strict"

// function swap(text) {
//   let words = text.split(' ');

//   for (let index = 0; index < words.length; index += 1) {
//     let word = words[index];

//     if (word.length > 1) {
//       let firstLetter = word[0];
//       let lastLetter = word[word.length - 1];
//       let wordMiddle = word.slice(1, word.length - 1)
//       words[index] = lastLetter + wordMiddle + firstLetter;
//     }
//   }

//   return words.join(' ');
// }

// console.log(swap('Oh what a wonderful day it is'));
// console.log(swap('Abcde'));
// console.log(swap('a'));

// Further Exploration

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

function swap(text) {
  let words = text.split(' ');

  let swapped = words.map(word => swapFirstLastCharacters(word));

  return swapped.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));
