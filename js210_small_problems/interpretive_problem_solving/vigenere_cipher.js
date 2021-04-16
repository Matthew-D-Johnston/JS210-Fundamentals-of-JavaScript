"use strict";

const Alphabet = 'abcdefghijklmnopqrstuvwxyz';
const UpperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function vigenereCipher(text, keyword) {
  keyword = keyword.length === 0 ? 'a' : keyword;

  let keyLetters = keyword.toLowerCase().split('');
  const ShiftValues = keyLetters.map(char => Alphabet.indexOf(char));

  let encrypted = '';
  let keyIndex = 0;
  let keyIndexLimit = keyword.length - 1;

  text.split('').forEach(char => {
    let originalPosition = Alphabet.indexOf(char.toLowerCase());
    let shiftedPosition = (originalPosition + ShiftValues[keyIndex]) % 26;
    encrypted += encryptLetter(char, shiftedPosition);
    if (/[a-z]/i.test(char)) {
      keyIndex += 1;
      if (keyIndex > keyIndexLimit) {
        keyIndex = 0;
      }
    }
  });

  return encrypted;
}

function encryptLetter(char, position) {
  let encryptedChar;

  if (/[a-z]/.test(char)) {
    encryptedChar = Alphabet[position];
  } else if (/[A-Z]/.test(char)) {
    encryptedChar = UpperAlphabet[position];
  } else {
    encryptedChar = char;
  }

  return encryptedChar;
}


console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat'));
console.log(vigenereCipher("How are you today?", 'five'));
console.log(vigenereCipher('', 'you'));
console.log(vigenereCipher('You are the coolest!', ''));
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'cab'));
console.log(vigenereCipher('Dog', 'Rabbit'));

