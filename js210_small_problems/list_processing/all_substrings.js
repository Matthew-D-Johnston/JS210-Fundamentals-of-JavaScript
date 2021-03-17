"use strict";

// function substrings(string) {
//   const Results = [];

//   for (let index = 0; index < string.length; index += 1) {
//     let substring = string.slice(index);
//     let substringsArray = leadingSubstrings(substring);
//     Results.push(substringsArray);
//   }

//   return Results.flat();
// }


function substrings(string) {
  let chars = string.split('');

  let substringsArray = chars.map((char, index) => {
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

console.log(substrings('abcde'));
