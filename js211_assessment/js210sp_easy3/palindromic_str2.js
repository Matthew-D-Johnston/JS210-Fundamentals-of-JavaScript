"use strict";

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'];

function isRealPalindrome(str) {
  let lowerCaseStr = '';

  for (let index = 0; index < str.length; index += 1) {
    let char = str[index].toLowerCase();

    if (ALPHABET.includes(char)) {
      lowerCaseStr += char;
    }
  }

  return isPalindrome(lowerCaseStr);
}

function isPalindrome(str) {
  let backwardStr = '';

  for (let index = str.length - 1; index >= 0; index -= 1) {
    backwardStr += str[index];
  }

  return str === backwardStr;
}

console.log(isRealPalindrome('madam'));
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome("Madam, I'm Adam"));
console.log(isRealPalindrome('356653'));
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('123ab321'));
