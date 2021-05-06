"use strict";

function merge(array1, array2) {
  let results = [];
  let index1 = 0;
  let index2 = 0;
  let limit1 = (array1.length - 1);
  let limit2 = (array2.length - 1);
  let limit = limit1 + limit2 + 1;

  for (let index = 0; index <= limit; index += 1) {
    if (index1 > limit1) {
      results = results.concat(array2.slice(index2));
      break;
    } else if (index2 > limit2) {
      results = results.concat(array1.slice(index1));
      break;
    } else if (array1[index1] <= array2[index2]) {
      results.push(array1[index1]);
      index1 += 1;
    } else {
      results.push(array2[index2]);
      index2 += 1;
    }
  }

  return results;
}

console.log(merge([1, 5, 9], [2, 6, 8]));
console.log(merge([1, 1, 3], [2, 2]));
console.log(merge([], [1, 4, 5]));
console.log(merge([1, 4, 5], []));
console.log(merge([1, 4, 6, 8], [9]));
