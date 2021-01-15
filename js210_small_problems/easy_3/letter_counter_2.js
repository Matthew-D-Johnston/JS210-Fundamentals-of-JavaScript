"use strict"

function wordSizes(text) {
  let words = text.split(' ');
  let sizes = {};

  for (let i = 0; i < words.length; i += 1) {
    let onlyAlphaChars = words[i].match(/[a-z]/ig) || [];
    let size = onlyAlphaChars.length;

    if (size === 0) {
      continue;
    }

    sizes[size] = sizes[size] || 0;
    sizes[size] += 1;
  }

  return sizes;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));