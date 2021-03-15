"use strict";

function reverseWords(text) {
  let words = text.split(' ');
  let modifiedWords = [];

  for (let index = 0; index < words.length; index += 1) {
    let word = words[index];
    if (word.length >= 5) {
      let chars = word.split('');
      modifiedWords.push(chars.reverse().join(''));
    } else {
      modifiedWords.push(word);
    }
  }

  return modifiedWords.join(' ');
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));
