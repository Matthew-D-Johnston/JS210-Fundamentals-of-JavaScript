"use strict";

function wordCap(text) {
  let words = text.split(/\s/g);

  return words.map(word => {
    let firstLetter = word[0].toUpperCase();
    let restOfWord = word.slice(1).toLowerCase();

    return firstLetter + restOfWord;
  }).join(' ');
}

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));
