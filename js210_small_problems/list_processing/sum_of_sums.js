"use strict";

function sumOfSums(array) {
  let totalSums = 0;

  for (let index = 0; index < array.length; index += 1) {
    let subset = array.slice(0, index + 1);
    let subsetSums = subset.reduce((sum, num) => sum + num, 0);
    totalSums += subsetSums;
  }

  return totalSums;
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));

// Solution 2

// function sumOfSums(array) {
//   let totalSums = 0;

//   for (let index = 0; index < array.length; index += 1) {
//     totalSums += array[index] * (array.length - index);
//   }

//   return totalSums;
// }

// console.log(sumOfSums([3, 5, 2]));
// console.log(sumOfSums([1, 5, 7, 3]));
// console.log(sumOfSums([4]));
// console.log(sumOfSums([1, 2, 3, 4, 5]));
