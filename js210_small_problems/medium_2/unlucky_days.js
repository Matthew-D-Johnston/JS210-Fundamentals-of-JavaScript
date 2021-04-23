"use strict";

// const Months = [ 'January',
//                  'February',
//                  'March',
//                  'April',
//                  'May',
//                  'June',
//                  'July',
//                  'August',
//                  'September',
//                  'October',
//                  'November',
//                  'December'
//                 ];

// function fridayThe13ths(year) {
//   return Months.filter(month => isFriday(13, month, year)).length;
// }


// function isFriday(day, month, year) {
//   return new Date(`${month} ${day}, ${year}`).getDay() === 5;
// }

// console.log(fridayThe13ths(1986));
// console.log(fridayThe13ths(2015));
// console.log(fridayThe13ths(2017));


// Refactored

function fridayThe13ths(year) {
  let count = 0;
  for (let month = 0; month < 12; month += 1) {
    isFriday(year, month, 13) ? count += 1 : count;
  }
  return count;
}


function isFriday(year, month, day) {
  return new Date(year, month, day).getDay() === 5;
}

console.log(fridayThe13ths(1986));
console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(2017));