"use strict";

function multiplyList(arr1, arr2) {
  let result = [];

  for (let index = 0; index < arr1.length; index += 1) {
    result.push(arr1[index] * arr2[index]);
  }

  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));
