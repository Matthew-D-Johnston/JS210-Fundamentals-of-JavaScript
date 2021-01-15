"use strict"

function wordSizes(text) {
  let words = text.split(' ');
  let sizes = {};

  if (text === '') {
    return {};
  }

  for (let i = 0; i < words.length; i += 1) {
    let size = words[i].length;

    if (sizes[size]) {
      sizes[size] += 1;
    } else {
      sizes[size] = 1;
    }
  }

  return sizes;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));
