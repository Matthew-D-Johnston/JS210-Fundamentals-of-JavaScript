"use strict";

function mergeSort(array) {
  let nestedArrays = makeNestedArray(array);
  return sortAndFlatten(nestedArrays);
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

function makeNestedArray(array) {
  let iterations = Math.round(array.length / 2);
  let nestedArrays = array.slice();

  for (let iteration = 1; iteration <= iterations; iteration += 1) {
    nestedArrays = divideArray(nestedArrays);
  }

  return nestedArrays;
}

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

function sortAndFlatten(nestedArrays) {
  let sorted;

  if (!Array.isArray(nestedArrays)) {
    return nestedArrays;
  } else if (nestedArrays.length === 2 && !Array.isArray(nestedArrays[0][0])) {
    sorted = merge(nestedArrays[0], nestedArrays[1]);
  } else {
    sorted = nestedArrays.map(array => sortAndFlatten(array));
  }

  if (Array.isArray(sorted[0])) {
    sorted = sortAndFlatten(sorted);
  }

  return sorted;
}

console.log(mergeSort([9, 5, 7, 1]));
console.log(mergeSort([5, 3]));
console.log(mergeSort([6, 2, 7, 1, 4]));
console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
