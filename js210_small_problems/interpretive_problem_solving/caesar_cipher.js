"use strict";

const Alphabet = 'abcdefghijklmnopqrstuvwxyz';

function caesarEncrypt(text, key) {
  let encrypted = '';

  for (let index = 0; index < text.length; index += 1) {
    let char = text[index];

    if (/[a-z]/.test(char)) {
      let position = Alphabet.indexOf(char);
      let substitutePosition = findSubstitutePosition(position, key);
      encrypted += Alphabet[substitutePosition];
    } else if (/[A-Z]/.test(char)) {
      let position = Alphabet.toUpperCase().indexOf(char);
      let substitutePosition = findSubstitutePosition(position, key);
      encrypted += Alphabet.toUpperCase()[substitutePosition];
    } else {
      encrypted += char;
    }
  }

  return encrypted;
}

function findSubstitutePosition(position, key) {
  let newPosition = position + key;

  while (newPosition >= 26) {
    newPosition -= 26;
  }

  return newPosition;
}

console.log(caesarEncrypt('A', 0));
console.log(caesarEncrypt('A', 3));
console.log(caesarEncrypt('y', 5));
console.log(caesarEncrypt('a', 47));
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
