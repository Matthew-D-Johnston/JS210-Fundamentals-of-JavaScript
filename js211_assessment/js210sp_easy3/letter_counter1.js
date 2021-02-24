"use strict";

function wordSizes(text) {
  if (text === '') {
    return {};
  }

  let sizes = {};
  let words = text.split(' ');

  words.forEach(function (word) {
    if (sizes[word.length]) {
      sizes[word.length] += 1;
    } else {
      sizes[word.length] = 1;
    }
  });

  return sizes;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and teh fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));
