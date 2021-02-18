"use strict";

const SQ_METERS_TO_SQ_FEET = 10.7639;

let readlineSync = require('readline-sync');

console.log("Enter the length of the room in meters:");
let roomLength = readlineSync.prompt();

console.log("Enter the width of the room in meters:");
let roomWidth = readlineSync.prompt();

let roomAreaMeters = (roomLength * roomWidth).toFixed(2);
let roomAreaFeet = (roomAreaMeters * SQ_METERS_TO_SQ_FEET).toFixed(2);

console.log(`The area of the room is ${roomAreaMeters} square meters (${roomAreaFeet} square feet).`);

