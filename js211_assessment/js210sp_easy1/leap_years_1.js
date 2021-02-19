"use strict";

function isLeapYear(year) {
  return (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0));
}

console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1752));
console.log(isLeapYear(1700));
console.log(isLeapYear(1));
console.log(isLeapYear(100));
console.log(isLeapYear(400));
