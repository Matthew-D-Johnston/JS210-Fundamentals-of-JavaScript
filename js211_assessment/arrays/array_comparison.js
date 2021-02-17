"use strict";

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index += 1) {
    let comparisonValue = array1[index];
    let filtered1 = array1.filter(element => comparisonValue === element);
    let filtered2 = array2.filter(element => comparisonValue === element);

    if (filtered1.length !== filtered2.length) {
      return false;
    }
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));
console.log(areArraysEqual([1, 1, 1], [1, 1]));
console.log(areArraysEqual([1, 1], [1, 1]));
