"use strict";

function palindromes(string) {
  return substrings(string).filter(substring => isPalindrome(substring));
}

function isPalindrome(string) {
  return string.length > 1 && string === string.split('').reverse().join('');
}

function substrings(string) {
  let chars = string.split('');

  let substringsArray = chars.map((_, index) => {
    return leadingSubstrings(chars.slice(index).join(''));
  });

  return substringsArray.flat();
}

function leadingSubstrings(string) {
  const Subsets = [];

  for (let index = 0; index < string.length; index += 1) {
    Subsets.push(string.slice(0, index + 1));
  }

  return Subsets;
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));
