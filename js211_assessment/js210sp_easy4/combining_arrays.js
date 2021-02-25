"use strict";

function union(arr1, arr2) {
  let result = [];

  arr1.forEach(function (value) {
    if (!result.includes(value)) {
      result.push(value);
    }
  });

  arr2.forEach(function (value) {
    if (!result.includes(value)) {
      result.push(value);
    }
  });

  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));
