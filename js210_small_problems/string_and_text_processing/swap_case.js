"use strict";

function swapCase(text) {
  let swappedCasesText = '';

  for (let index = 0; index < text.length; index += 1) {
    if (/[A-Z]/.test(text[index])) {
      swappedCasesText += text[index].toLowerCase();
    } else if (/[a-z]/.test(text[index])) {
      swappedCasesText += text[index].toUpperCase();
    } else {
      swappedCasesText += text[index];
    }
  }

  return swappedCasesText;
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));
