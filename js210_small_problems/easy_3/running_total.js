"use strict"

// function runningTotal(numbers) {
//   if (numbers[0] === undefined) {
//     return [];
//   }

//   let currentTotal = numbers[0];
//   let totals = [currentTotal];

//   for (let index = 1; index < numbers.length; index += 1) {
//     currentTotal += numbers[index];
//     totals.push(currentTotal);
//   }

//   return totals;
// }

// console.log(runningTotal([2, 5, 13]));
// console.log(runningTotal([14, 11, 7, 15, 20]));
// console.log(runningTotal([3]));
// console.log(runningTotal([]));


// Further Exploration

function runningTotal(numbers) {
  let sum = 0;
  return numbers.map(number => sum += number);
}


console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));
