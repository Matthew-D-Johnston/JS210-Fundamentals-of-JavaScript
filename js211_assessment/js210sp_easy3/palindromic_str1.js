"use strict";

function isPalindrome(str) {
  let backwardStr = '';

  for (let index = str.length - 1; index >= 0; index -= 1) {
    backwardStr += str[index];
  }

  return str === backwardStr;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));
