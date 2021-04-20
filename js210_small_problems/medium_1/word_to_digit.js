"use strict";

// const NUMBERS_KEY = { 'zero'  : 0,
//                       'one'   : 1,
//                       'two'   : 2,
//                       'three' : 3,
//                       'four'  : 4,
//                       'five'  : 5,
//                       'six'   : 6,
//                       'seven' : 7,
//                       'eight' : 8,
//                       'nine'  : 9,
//                     };

// function wordToDigit(text) {
//   const Digits = Object.keys(NUMBERS_KEY);
//   let transformedText = text;

//   Digits.forEach(numberWord => {
//     let regex = new RegExp('\\b' + numberWord + '\\b', 'gi');
//     transformedText = transformedText.replace(regex, NUMBERS_KEY[numberWord]);
//   });

//   return transformedText;
// }

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// console.log(wordToDigit('Please call me at FIVE five five oNe two three four. Thanks.'));
// console.log(wordToDigit('My address is one eight six three Yolo Boulevard.'));
// console.log(wordToDigit("Hey! What's up maaaan?"));
// console.log(wordToDigit(''));
// console.log(wordToDigit('There are only ten left. Wait, there is one, two, maybe three more.'));
// console.log(wordToDigit('The weight is done'));

// Further Exploration

// function wordToDigit(text) {
//   let transformedText = text;

//   transformedText = replaceNumberWords(transformedText, 'zero', 0);
//   transformedText = replaceNumberWords(transformedText, 'one', 1);
//   transformedText = replaceNumberWords(transformedText, 'two', 2);
//   transformedText = replaceNumberWords(transformedText, 'three', 3);
//   transformedText = replaceNumberWords(transformedText, 'four', 4);
//   transformedText = replaceNumberWords(transformedText, 'five', 5);
//   transformedText = replaceNumberWords(transformedText, 'six', 6);
//   transformedText = replaceNumberWords(transformedText, 'seven', 7);
//   transformedText = replaceNumberWords(transformedText, 'eight', 8);
//   transformedText = replaceNumberWords(transformedText, 'nine', 9);

//   return transformedText;
// }

// function replaceNumberWords(text, numberWord, digit) {
//   let regex = new RegExp('\\b' + numberWord + '\\b', 'gi');
//   return text.replace(regex, digit);
// }

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// console.log(wordToDigit('Please call me at FIVE five five oNe two three four. Thanks.'));
// console.log(wordToDigit('My address is one eight six three Yolo Boulevard.'));
// console.log(wordToDigit("Hey! What's up maaaan?"));
// console.log(wordToDigit(''));
// console.log(wordToDigit('There are only ten left. Wait, there is one, two, maybe three more.'));
// console.log(wordToDigit('The weight is done'));

// Refactored FE

function wordToDigit(text) {
  const Words = ['zero',
                  'one',
                  'two',
                  'three',
                  'four',
                  'five',
                  'six',
                  'seven',
                  'eight',
                  'nine'
                  ];
  let result = text;

  Words.forEach((word, digit) => result = replaceNumWords(result, word, digit));
  return result;
}

function replaceNumWords(text, numberWord, digit) {
  let regex = new RegExp('\\b' + numberWord + '\\b', 'gi');
  return text.replace(regex, digit);
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
console.log(wordToDigit('Please call me at FIVE five five oNe two three four. Thanks.'));
console.log(wordToDigit('My address is one eight six three Yolo Boulevard.'));
console.log(wordToDigit("Hey! What's up maaaan?"));
console.log(wordToDigit(''));
console.log(wordToDigit('There are only ten left. Wait, there is one, two, maybe three more.'));
console.log(wordToDigit('The weight is done'));

