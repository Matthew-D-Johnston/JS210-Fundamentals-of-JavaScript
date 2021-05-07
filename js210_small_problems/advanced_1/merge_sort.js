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

function sorting(nestedArrays) {
  let resultArray;

  if (!Array.isArray(nestedArrays)) {
    resultArray = nestedArrays;
  } else if (nestedArrays.length === 2 && !Array.isArray(nestedArrays[0][0])) {
    resultArray = mergeFlatten(nestedArrays);
  } else {
    resultArray = nestedArrays.map(array => {
      if (array.length === 2 && !Array.isArray(array[0][0])) {
        return mergeFlatten(array);
      } else {
        return sorting(array);
      }
    });
  }

  if (Array.isArray(resultArray[0])) {
    resultArray = sorting(resultArray);
  }
  return resultArray;
}

function mergeFlatten(array) {
  return merge(array[0], array[1]);
}

let arrays = mergeSort([9, 5, 7, 1, 3]);
console.log(sorting(arrays));





