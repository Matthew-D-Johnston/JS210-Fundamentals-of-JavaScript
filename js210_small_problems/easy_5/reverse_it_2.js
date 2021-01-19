"use strict"

function reverseWords(string) {
  let result = [];
  let words = string.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];

    if (word.length >= 5) {
      result.push(word.split('').reverse().join(''));
    } else {
      result.push(word);
    }
  }

  return result.join(' ');
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));
