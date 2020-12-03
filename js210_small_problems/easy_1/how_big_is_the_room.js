// let rlSync = require('readline-sync');

// console.log('Enter the length of the room in meters:');
// let length = rlSync.prompt();
// console.log('Enter the width of the room in meters:');
// let width = rlSync.prompt();

// let conversionFactor = 10.7639;

// let roomAreaInMeters = length * width;
// let roomAreaInFeet = roomAreaInMeters * conversionFactor;

// let textOutput = `The area of the room is ${roomAreaInMeters.toFixed(2)} \
// square meters (${roomAreaInFeet.toFixed(2)} square feet).`
  
// console.log(textOutput);

// Further Exploration

let rlSync = require('readline-sync');

let inputType;
let testCondition = true

do {
  console.log('Input in meters or feet?');
  inputType = rlSync.prompt();
  if (inputType === 'meters' || inputType === 'feet') {
    testCondition = false;
  }
} while (testCondition);

console.log(`Enter the length of the room in ${inputType}:`);
let length = rlSync.prompt();
length = parseInt(length, 10);

console.log(`Enter the width of the room in ${inputType}:`);
let width = rlSync.prompt();
width = parseInt(width, 10);

let conversionFactor = 10.7639;

let areaInMeters;
let areaInFeet;

if (inputType === 'meters') {
  areaInMeters = length * width;
  areaInFeet = areaInMeters * conversionFactor;
} else {
  areaInFeet = length * width;
  areaInMeters = areaInFeet / conversionFactor;
}

let textOutput = `The area of the room is ${areaInMeters.toFixed(2)} \
square meters (${areaInFeet.toFixed(2)} square feet).`
  
console.log(textOutput);