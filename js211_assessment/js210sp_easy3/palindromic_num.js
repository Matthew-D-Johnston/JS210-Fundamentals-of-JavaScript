"use strict";

function isPalindromicNumber(num) {
  return isPalindrome(num.toString());
}

function isPalindrome(str) {
  let backwardStr = '';

  for (let index = str.length - 1; index >= 0; index -= 1) {
    backwardStr += str[index];
  }

  return str === backwardStr;
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));
