"use strict"

function isPalindrome(text) {
  let textArray = text.split('');
  let reversedText = textArray.reverse().join('');

  return text === reversedText;
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));
console.log(isPalindromicNumber(02320));
