"use strict";

function leadingSubstrings(string) {
  const Subsets = [];

  for (let index = 0; index < string.length; index += 1) {
    Subsets.push(string.slice(0, index + 1));
  }

  return Subsets;
}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));

// Further Exploration

// function leadingSubstrings(string) {
//   let chars = string.split('');

//   return chars.map((char, index) => chars.slice(0, index + 1)
//                                          .reduce((str, char) => str + char));
// }

// console.log(leadingSubstrings('abc'));
// console.log(leadingSubstrings('a'));
// console.log(leadingSubstrings('xyzzy'));
