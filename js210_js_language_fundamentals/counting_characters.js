// My Solution

// let readlineSync = require("readline-sync");

// console.log('Please enter a phrase:');
// let phrase = readlineSync.prompt();

// console.log(`There are ${phrase.length} characters in "${phrase}".`);

// LS Solution

// const input = prompt('Please enter a phrase:');
// const numberOfCharacters = String(input.length);

// console.log(`There are ${numberOfCharacters} characters in '${input}'.`);

// Further Exploration

let readlineSync = require("readline-sync");

console.log('Please enter a phrase:');

let phrase = readlineSync.prompt();
let regex = / /g;
let noSpacesPhrase = phrase.replace(regex, '');

let phraseLength = noSpacesPhrase.length;

console.log(`There are ${phraseLength} characters in "${phrase}".`);