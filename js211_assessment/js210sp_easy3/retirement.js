"use strict";

let readlineSync = require('readline-sync');

let age = readlineSync.question('What is your age? ');
let retirementAge = readlineSync.question('At what age would you like to retire? ');
let currentDate = new Date();
let year = currentDate.getFullYear();
let yearsToRetirement = retirementAge - age;
let retirementYear = year + yearsToRetirement;

console.log(`It's ${year}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsToRetirement} years of work to go!`);
