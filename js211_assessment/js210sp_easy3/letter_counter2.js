"use strict";

const ALPHABET = ['a', 'b', 'c', 'd', 'e',
                  'f', 'g', 'h', 'i', 'j',
                  'k', 'l', 'm', 'n', 'o',
                  'p', 'q', 'r', 's', 't',
                  'u', 'v', 'w', 'x', 'y',
                  'z'];

function wordSizes(text) {
  if (text === '') {
    return {};
  }

  let sizes = {};
  let words = text.split(' ');

  words.forEach(function (word) {
    let wordLength = letterCounter(word);

    if (sizes[wordLength]) {
      sizes[wordLength] += 1;
    } else {
      sizes[wordLength] = 1;
    }
  });

  return sizes;
}

function letterCounter(word) {
  let lettersOnlyWord = '';

  for (let index = 0; index < word.length; index += 1) {
    let char = word[index].toLowerCase();

    if (ALPHABET.includes(char)) {
      lettersOnlyWord += char;
    }
  }

  return lettersOnlyWord.length;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));
