"use strict"

// Solution 1

// function union(array1, array2) {
//   let concatenated = array1.concat(array2);
//   let uniqueSet = new Set();

//   for (let i = 0; i < concatenated.length; i += 1) {
//     uniqueSet.add(concatenated[i]);
//   }

//   return Array.from(uniqueSet);
// }

// console.log(union([1, 3, 5], [3, 6, 9]));


// Solution 2

// function union(array1, array2) {
//   array1 = uniqueValues(array1);
//   array2 = uniqueValues(array2);
//   let concatenated = array1.slice();

//   for (let index = 0; index < array2.length; index += 1) {
//     if (arrayIncludes(array1, array2[index])) {
//       continue;
//     }

//     concatenated.push(array2[index]);
//   }

//   return concatenated;
// }

// function arrayIncludes(array, value) {
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] === value) {
//       return true;
//     }
//   }

//   return false;
// }

// function uniqueValues(array) {
//   let valuesObject = {};

//   for (let index = 0; index < array.length; index += 1) {
//     valuesObject[array[index]] = 1;
//   }

//   let keyValues = Object.keys(valuesObject);
//   let numericValues = [];

//   for (let index = 0; index < keyValues.length; index += 1) {
//     numericValues.push(Number(keyValues[index]));
//   }

//   return numericValues;
// }

// console.log(union([1, 3, 5], [3, 6, 9]));
// console.log(union([1, 3, 4, 5, 7], [3, 4, 5, 6, 7, 8]));
// console.log(union([1, 3, 5, 3], [4, 1, 2, 2]));


// Refactored Solution 2

function uniqueValues(array) {
  let valuesObject = {};

  for (let index = 0; index < array.length; index += 1) {
    valuesObject[array[index]] = "This string could say anything";
  }

  let stringValues = Object.keys(valuesObject);
  let numericValues = [];

  for (let index = 0; index < stringValues.length; index += 1) {
    numericValues.push(Number(stringValues[index]));
  }

  return numericValues;
}

function union(array1, array2) {
  return uniqueValues(array1.concat(array2));
}

console.log(union([1, 3, 5], [3, 6, 9]));
console.log(union([1, 3, 4, 5, 7], [3, 4, 5, 6, 7, 8]));
console.log(union([1, 3, 5, 3], [4, 1, 2, 2]));