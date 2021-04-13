"use strict";

const letterBlocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

function isBlockWord(word) {
  let letterBlockMatches = [];

  for (let index = 0; index < word.length; index += 1) {
    let currentChar = word[index].toUpperCase();

    if (/[A-Z]/.test(currentChar)) {

      for (let idx = 0; idx < letterBlockMatches.length; idx += 1) {
        if (letterBlockMatches[idx].includes(currentChar)) {
          return false;
        }
      }

      letterBlockMatches.push(matchLetterBlock(currentChar));
    }
  }

  return true;
}


function matchLetterBlock(char) {
  let matchedLetterBlock;

  for (let index = 0; index < letterBlocks.length; index += 1) {
    if (letterBlocks[index].includes(char)) {
      matchedLetterBlock = letterBlocks[index];
    }
  }

  return matchedLetterBlock;
}

console.log(isBlockWord('BATCH'));
console.log(isBlockWord('BUTCH'));
console.log(isBlockWord('jest'));
console.log(isBlockWord("HASN'T"));
console.log(isBlockWord('WI-FI'));
console.log(isBlockWord(''));
