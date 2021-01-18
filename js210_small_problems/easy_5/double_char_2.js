"use strict"

const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
                    'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function doubleConsonants(text) {
  let finishedText = '';

  for (let i = 0; i < text.length; i += 1) {
    if (consonants.includes(text[i].toLowerCase())) {
      finishedText += text[i].repeat(2);
    } else {
      finishedText += text[i];
    }
  }

  return finishedText;
}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));
