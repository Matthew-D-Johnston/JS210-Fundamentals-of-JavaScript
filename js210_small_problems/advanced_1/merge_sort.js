"use strict";


function mergeSort(array) {
  let iterations = Math.round(array.length / 2);
  let nestedArrays = array.slice();

  for (let iteration = 1; iteration <= iterations; iteration += 1) {
    nestedArrays = divideArray(nestedArrays);
  }

  return nestedArrays;
}

function divideArray(array) {
  let midpoint = Math.round(array.length / 2);

  if (array.length === 1) {
    return array;
  } else if (Array.isArray(array[0])) {
    return array.map(subarray => divideArray(subarray));
  } else {
    return [array.slice(0, midpoint), array.slice(midpoint)];
  }
}


console.log(mergeSort([9, 5, 7, 1, 4, 9, 4, 3, 2, 4, 5, 8, 4, 4, 3, 2, 4, 5, 3, 3, 6, 7, 2, 5, 1]));